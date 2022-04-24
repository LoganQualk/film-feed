import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import useLocalState from "../hooks/useLocalState";
import listData from "../tempData/lists";
import logData from "../tempData/logs";
import postData from "../tempData/posts";
import specificLogsData from "../tempData/specificLogs";
import axios from "axios";

export const GlobalContext = createContext({
    changePage: () => { },
    posts: [], lists: [], logs: [], movieId: 0, movieName: null, movieYr: 0, movieUrl: null,
    specificLogs: [], tempAllResults: [], allResults: [], userSearchInput: null, reviews: [], tabValue: 0,
    setPosts: () => { }, setLists: () => { }, setLogs: () => { }, setMovieId: () => { }, setMovieName: () => { }, setMovieYr: () => { }, setMovieUrl: () => { },
    setSpecificLogs: () => { }, setUserSearchInput: () => { }, displayResultsPage: () => { }, setReviews: () => { }, setTabValue: (value: number) => { },
    createPost: () => { },
    createComment: () => { },
    currentUser: "", setCurrentUser: () => {}
});

export const GlobalProvider = ({ children }) => {

    // // the setters will now set things in local storage, and get from the local storage
    const [posts, setPosts] = useLocalState("posts", postData);
    const [lists, setLists] = useLocalState("lists", listData);
    const [logs, setLogs] = useLocalState("logs", logData);
    const [movieId, setMovieId] = useLocalState("movieId", null);
    const [movieName, setMovieName] = useLocalState("movieName", null);
    const [movieYr, setMovieYr] = useLocalState("movieYr", null);
    const [movieUrl, setMovieUrl] = useLocalState("movieUrl", null);
    const [specificLogs, setSpecificLogs] = useLocalState("specificLogs", specificLogsData);
    const [reviews, setReviews] = useLocalState("reviews", []);
    const [tabValue, setTabValue] = useLocalState("tabValue", 0);

    const [currentUser, setCurrentUser] = useLocalState("currentUser", "Sam Smith")

    const navigate = useNavigate();
    const [modalVisible, setModalVisible] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [modalPage, setModalPage] = useState(null);
    let [results, setResults] = useState([]);
    let [tempAllResults, setTempAllResults] = useState([]);
    let [allResults, setAllResults] = useState([]);
    let [userSearchInput, setUserSearchInput] = useState(null);
    let [attachResults, setAttachResults] = useState([]);
    // const [modalData, setModalData] = useState(null);

    const changePage = async (page, data) => { //data parameter is optional
        navigate("/" + page, { state: data });
    }

    const createPost = (post) => {
        setPosts([...posts, post]);
    }

    const createComment = (id, comment) => {
        const postToChange = posts.findIndex(post => post.id === id);
        let newPosts = posts;
        newPosts[postToChange].replies.push(
            {
                "user": "Penny Smith",
                "date": new Date(), // replace with time/date replied,
                "text": comment,
                "replies": []
            }
        );
        setPosts([...newPosts]);
    }

    const searchUrl =
        "https://api.themoviedb.org/3/search/movie?api_key=" +
        process.env.REACT_APP_API_KEY +
        "&query=";

    async function httpGetMovies(title) {
        if (title) {
            let response = await axios({
                method: "GET",
                url: searchUrl + title,
            });
            return response.data.results;
        }
        return null;
    }

    function displayResults(searchInput) {
        if (searchInput.length === 0) {
            setResults([]);
            return;
        } else {
            httpGetMovies(searchInput).then((apiResults) => {
                setTempAllResults(apiResults);
                let shortenedResults = apiResults.slice(0, 10);
                shortenedResults.push(
                    {
                        id: 'More results',
                        title: 'Click for more results...',
                        release_date: null,
                    }
                );
                setResults(shortenedResults);
            }
            );
        }
    }

    function displayResultsPage(searchInput) {
        httpGetMovies(searchInput).then((apiResults) => {
            setTempAllResults(apiResults);
        });
    }

    function displayAttachResults(searchInput) {
        if (searchInput.length === 0) {
            setAttachResults([]);
            return;
        } else {
            httpGetMovies(searchInput).then((apiResults) => {
                let shortenedResults = apiResults.splice(0, 10);
                shortenedResults.push(
                    {
                        id: 'More results',
                        title: 'Click for more results...',
                        release_date: null,
                    }
                );
                setAttachResults(shortenedResults);
            }
            );
        }
    }

    async function httpGetCredits(idInput) {
        const creditsUrl = `https://api.themoviedb.org/3/movie/${idInput}/credits?api_key=${process.env.REACT_APP_API_KEY}`;

        return await axios({
            method: "GET",
            url: creditsUrl,
        }).then((response) => {
            return response.data;
        });
    }

    function setIdAndLoad(id) {
        if(id === "More results") {
            setAllResults(tempAllResults);
            setUserSearchInput(document.getElementById("searchInput").value);
            changePage("searchResults");
        } else {
            setMovieId(id);
            changePage(`movie=${id}`, id);
            document.getElementById("searchInput").value = '';
        }
        setResults([]);
        setTabValue(0);
    }
    

    const globalState = {
        changePage,
        modalVisible, setModalVisible,
        modalPage, setModalPage,
        isLoaded, setIsLoaded,
        posts, setPosts,
        lists, setLists,
        logs, setLogs,
        movieId, setMovieId,
        movieName, setMovieName,
        movieYr, setMovieYr,
        movieUrl, setMovieUrl,
        specificLogs, setSpecificLogs,
        createPost,
        createComment,
        results, setResults,
        allResults,
        userSearchInput, setUserSearchInput,
        httpGetCredits,
        httpGetMovies,
        displayResults, displayResultsPage, 
        tabValue, setTabValue,
        reviews, setReviews,
        setIdAndLoad,
        attachResults, setAttachResults,
        displayAttachResults,
        currentUser, setCurrentUser
    };

    return (
        <GlobalContext.Provider value={globalState}>
            {children}
        </GlobalContext.Provider>
    );
}