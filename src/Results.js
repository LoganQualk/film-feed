import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";

const Results = () => {
    const { changePage, allResults, setMovieId, userSearchInput } = useContext(GlobalContext);

    return (
        <>
            <div id="listPage" className="containerWithBackground">
                <div className="flexRow alignCenter">
                    <div>Search Results for "{userSearchInput}"...</div> {console.log(JSON.stringify(allResults))}
                </div>
                <hr />
                {
                    allResults.map((movieObj) =>
                        {
                            let posterUrl = `https://image.tmdb.org/t/p/original/${movieObj.poster_path}`;
                            return(
                        <button key={movieObj.id} className="searchResultsObj">
                            <img className="resultsPoster" src={posterUrl} alt={movieObj.title + " Poster"} />
                            <div className="flexCol alignStart">
                                <h2>{movieObj.title}</h2>
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