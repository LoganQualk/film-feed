import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";

const Results = () => {
    const { changePage, allResults, setMovieId, userSearchInput, setIdAndLoad } = useContext(GlobalContext);

    return (
        <>
            <div id="listPage" className="containerWithBackground">
                <div className="flexRow alignCenter">
                    <div className="searchResultsFor">Search Results for "{userSearchInput}"...</div> {console.log(JSON.stringify(allResults))}
                </div>
                <hr />
                {
                    allResults.map((movieObj) =>
                        {
                            let posterUrl = `https://image.tmdb.org/t/p/original/${movieObj.poster_path}`;
                            return(
                        <button key={movieObj.id} className="searchResultsObj" onClick={() => {setIdAndLoad(movieObj.id)}}>
                            <img className="resultsPoster" src={posterUrl} alt={movieObj.title + " Poster"} />
                            <div className="flexCol alignStart">
                                <div className="searchTitle">{movieObj.title}</div>
                            </div>
                        </button>);
                        }
                    )
                }
            </div>
        </>
    );
}

export default Results;