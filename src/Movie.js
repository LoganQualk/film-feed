import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from "./context/GlobalContext";
import axios from 'axios';
import { useLocation } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import LogAddRecButtons from './components/LogAddRecButtons';


const Movie = () => {
    const { setMovieName, setMovieYr, setMovieUrl, specificLogs, httpGetCredits } = useContext(GlobalContext);

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
    }, [movieId, id]);
    
    const detailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`;
    async function httpGetDetails() {
        return await axios({
            method: "GET",
            url: detailsUrl,
        }).then((response) => {
            return response.data;
        });
    }

    if(!loaded) {
        httpGetDetails().then((response) => {
            setDetails(response);
            setPoster(`https://image.tmdb.org/t/p/original/${response.poster_path}`);
            setMovieUrl(`https://image.tmdb.org/t/p/original/${response.poster_path}`);
            
            let responseGenres = [];
            response.genres.map((genreObj) => 
                responseGenres.push(genreObj.name)
            );
            setGenres(responseGenres);

            setMovieName(response.title);

            let responseYr = details.release_date ? (details.release_date.split("-")[0]) : null;
            setMovieYr(responseYr);

            setLoaded(true);
        });

        httpGetCredits(movieId).then((response) => {
            let responseDirectors = [];
            response.crew.filter(
                            (crewObj) => {if(crewObj.job === "Director") {
                                return true;
                            } else return false})
                         .map((directorObj) => 
                            responseDirectors.push(directorObj.name)
                         );
            setDirectors(responseDirectors);

            let responseCast = response.cast.splice(0, 4)
                                            .map((castObj) => castObj.name);
            setCast(responseCast);
        });
    }

    return ( 
        <div>
            <div className="detailsContainer">
                {details ? 
                (<div className="flexRow">
                    <img className="detailsPoster" src={poster} alt='Poster'/>

                    <div className="flexCol detailsInfo">
                        <div className="detailsTitle">{details.title}{details.release_date ? (<span className="detailsYr">({details.release_date.split("-")[0]})</span>) : ''}</div>
                        {directors ? (<div className="detailsTxt">Directed by: <span className="detailsFocus">{directors.length !== 0 ? String(directors).replace(/,/g, ', ') : <em>Unknown</em>}</span></div>) : ''}
                        {details.runtime ? (<div className="detailsTxt">Runtime: <span className="detailsFocus">{details.runtime} min</span></div>) : ''}
                        {genres ? (<div className="detailsTxt txtPadding">Genres: {genres.length !== 0 ? genres.map((g) => (<span className="genreContainer" key={g}><span className="detailsGenre">{g}</span></span>)) : <em>Unknown</em>}</div>) : ''}
                        {cast ? (<div className="detailsTxt txtPadding">Cast: {cast.length !== 0 ? String(cast).replace(/,/g, ', ') : <em>Unknown</em>}</div>) : ''}
                        <br />
                        <div className="detailsFocus">{details.overview}</div>
                    </div> 

                    <div><LogAddRecButtons /></div>
                </div>)
                :
                <div>Loading</div>
                }
            </div>

            <div className="detailsDiaryContainer flex flexCol">
                <h1 className="detailsDiaryTitle">My Diary</h1>
                <div className="detailsLogs">
                    {specificLogs.filter((log) => {if(log.title === null || log.title === details.title) return true; else return false})
                                 .sort(function(a, b) {return new Date(b.date) - new Date(a.date);})
                                 .map((log) => 
                        (<div className="detailsLogContainer" key={log.date}>
                            <div className="detailsLog">
                                <div className="flexRow justifyBetween">
                                    <div className="detailsLogDate">Date: {(new Date(log.date)).toLocaleDateString("en-US")}</div>
                                    {log.rating ? 
                                    (<div className="detailsStars"> 
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            isHalf={true}
                                            value={log.rating}
                                            edit={false}
                                            emptyIcon={<i className="far fa-star"></i>}
                                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                                            fullIcon={<i className="fa fa-star"></i>}
                                            activeColor="#ffd700"
                                        />
                                    </div>)
                                    :
                                    <div></div>}
                                </div>
                                
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