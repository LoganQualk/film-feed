import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useLocalState from "../hooks/useLocalState";
import listData from "../tempData/lists";
import logData from "../tempData/logs";
import postData from "../tempData/posts";
import specificLogsData from "../tempData/specificLogs";

export const GlobalContext = createContext({
    changePage: () => { },
    posts: [], lists: [], logs: [], movieId: 0, movieName: null, movieYr: 0, movieUrl: null,
    specificLogs: [],
    setPosts: () => { }, setLists: () => { }, setLogs: () => { }, setMovieId: () => { }, setMovieName: () => { }, setMovieYr: () => { }, setMovieUrl: () => { },
    setSpecificLogs: () => { },
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

    const navigate = useNavigate();
    const [modalVisible, setModalVisible] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [modalPage, setModalPage] = useState(null);
    // const [modalData, setModalData] = useState(null);

    const changePage = async (page, data) => { //data parameter is optional
        navigate("/" + page, { state: data });
    }

    const createPost = (post) => {
        setPosts([...posts, post]);
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
    };

    return (
        <GlobalContext.Provider value={globalState}>
            {children}
        </GlobalContext.Provider>
    );
}