import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Button from 'react-bootstrap/Button';
import { generateID } from "../tools/generateID";

const AttachMovieModal = () => {

    const { displayAttachResults, attachResults, httpGetDetails, currentListId, attachMovieLocation, 
        lists, setLists, setModalVisible, setModalPage, postBoxAttachedMovie, setPostBoxAttachedMovie,
        setMovieName, setMovieId, setMovieYr, setMovieUrl } = useContext(GlobalContext);
    const [date, setDate] = useState(new Date());
    
    return (
        <div>
            <h1>Attach Movie</h1>
            <span className="doubleGrow alignCenter">
                <input
                    className="searchbar"
                    id="searchInput"
                    placeholder="Search for a film/user..."
                    onChange={(e) => displayAttachResults(e.target.value)}
                />
                <div className="searchResults flexCol">
                    {attachResults.map((movie) => {
                        let yrReleased = null;
                        if (movie.release_date) {
                            yrReleased = movie.release_date.split("-")[0];
                        }
                        return (
                            <button key={movie.id}
                                className='autocomplete-items'
                                onClick={async () => {
                                    const details = await httpGetDetails(movie.id);

                                    if (attachMovieLocation === "list") {
                                        let listToChange = lists.find(list => list.id === currentListId);
                                        listToChange.attachedMovies.push({
                                            "name": details.title,
                                            "id": generateID(),
                                            "tmdbId": details.id,
                                            "year": new Date(details.release_date.replace("-", "/")).getFullYear(),
                                            "imageUrl": `https://image.tmdb.org/t/p/original/${details.poster_path}`,
                                            "log": null
                                        })
                                        setLists([...lists]);
                                        setModalVisible(false);
                                        setModalPage("");
                                    } else if (attachMovieLocation === "createPost") { // Logan put code here
                                        postBoxAttachedMovie.push({
                                            "name": details.title,
                                            "id": generateID(),
                                            "tmdbId": details.id,
                                            "year": new Date(details.release_date.replace("-", "/")).getFullYear(),
                                            "imageUrl": `https://image.tmdb.org/t/p/original/${details.poster_path}`
                                        })
                                        setPostBoxAttachedMovie([...postBoxAttachedMovie]);
                                        setModalVisible(false);
                                        setModalPage("");
                                    } else if (attachMovieLocation === "addToDiary"){
                                        setModalVisible(false);
                                        setMovieName(details.title);
                                        setMovieId(generateID());
                                        setMovieYr(new Date(details.release_date.replace("-", "/")).getFullYear());
                                        setMovieUrl(`https://image.tmdb.org/t/p/original/${details.poster_path}`);
                                        setModalPage("logMovie");
                                        setModalVisible(true);
                                    }
                                }}>
                                {movie.title} {yrReleased ? '(' + yrReleased + ')' : ''}
                            </button>
                        )
                    })
                    }
                </div>
                <Button id="searchButton">Search</Button>
            </span>
        </div>
    );
}

export default AttachMovieModal;