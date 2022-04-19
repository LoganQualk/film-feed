import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Button from 'react-bootstrap/Button';

const AttachMovieModal = () => {

    const { displayAttachResults, attachResults, setIdAndLoad } = useContext(GlobalContext);

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
                            if(movie.release_date) {
                                yrReleased = movie.release_date.split("-")[0];
                            }
                            return (
                                <button key={movie.id} 
                                        className='autocomplete-items' 
                                        onClick={() => setIdAndLoad(movie.id)}>
                                    {movie.title} {yrReleased ? '('+yrReleased+')' : ''}
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