import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import Header from './components/Header';
import fakeLogs from './tempData/fakeLogs';


const Movie = () => {
    const [loaded, setLoaded] = useState(false);
    const [details, setDetails] = useState([]);
    const [poster, setPoster] = useState();
    const [genres, setGenres] = useState([]);
    const [directors, setDirectors] = useState();
    const [cast, setCast] = useState([]);

    const movieId = useLocation().state;
    const [id, setId] = useState(movieId);
    
    useEffect(() => {
        if(id !== movieId) {
            setId(movieId);
            setLoaded(false);
        }
    }, [movieId]);
    
    const detailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`;
    async function httpGetDetails() {
        return await axios({
            method: "GET",
            url: detailsUrl,
        }).then((response) => {
            return response.data;
        });
    }
    const creditsUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}`;
    async function httpGetCredits() {
        return await axios({
            method: "GET",
            url: creditsUrl,
        }).then((response) => {
            return response.data;
        });
    }

    if(!loaded) {
        httpGetDetails().then((response) => {
            setDetails(response);
            setPoster(`https://image.tmdb.org/t/p/original/${response.poster_path}`);
            
            let responseGenres = [];
            response.genres.map((genreObj) => {
                responseGenres.push(genreObj.name);
            });
            setGenres(responseGenres);

            setLoaded(true);
        });

        httpGetCredits().then((response) => {
            let responseDirectors = [];
            response.crew.filter(
                            (crewObj) => {if(crewObj.job === "Director") return true;})
                         .map((directorObj) => {
                            responseDirectors.push(directorObj.name);
                         });
            setDirectors(responseDirectors);

            let responseCast = response.cast.splice(0, 4)
                                            .map((castObj) => castObj.name);
            setCast(responseCast);
        });
    }

    return ( 
        <div>
            <Header />
            <div className="detailsContainer">
                {details ? 
                (<div className="flexRow">
                    <img className="detailsPoster" src={poster} />

                    <div className="flexCol detailsInfo">
                        <div className="detailsTitle">{details.title}{details.release_date ? (<span className="detailsYr">({details.release_date.split("-")[0]})</span>) : ''}</div>
                        {directors ? (<div className="detailsTxt">Directed by: <span className="detailsFocus">{String(directors)}</span></div>) : ''}
                        {details.runtime ? (<div className="detailsTxt">Runtime: <span className="detailsFocus">{details.runtime} min</span></div>) : ''}
                        {genres ? (<div className="detailsTxt txtPadding">Genres: {genres.map((g) => (<span className="genreContainer" key={g}><span className="detailsGenre">{g}</span></span>))}</div>) : ''}
                        {cast ? (<div className="detailsTxt txtPadding">Cast: {String(cast).replace(/,/g, ', ')}</div>) : ''}
                        <br />
                        <div className="detailsFocus">{details.overview}</div>
                    </div> 
                </div>)
                :
                <div>Loading</div>
                }
            </div>

            <div className="detailsDiaryContainer">
                <h1 className="detailsDiaryTitle">My Diary</h1>
                <div className="detailsLogs">
                    {fakeLogs.map((log) => 
                        (<div className="detailsLogContainer" key={log.date}>
                            <div className="detailsLog">
                                <div className="detailsLogDate">Date: {log.date}</div>
                                <div className="detailsLogEntry">{log.entry}</div>
                            </div>
                        </div>)
                    )}
                </div>
            </div>
        </div>
    );
}
 
export default Movie;