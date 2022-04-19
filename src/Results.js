import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import ReactStars from "react-rating-stars-component";

const compute5StarRating = (value) => {
    const step = 0.5;
    let inv = 1.0 / step;
    return Math.round(parseInt(value) * inv) / (inv * 2.0);
};

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
                            <div className="flexCol alignStart searchInfo">
                                <div className="searchTitle">{movieObj.title}</div>
                                <div> 
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        isHalf={true}
                                        value={compute5StarRating(movieObj.vote_average)}
                                        edit={false}
                                        emptyIcon={<i className="far fa-star"></i>}
                                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                                        fullIcon={<i className="fa fa-star"></i>}
                                        activeColor="#ffd700"
                                    />
                                </div>
                                <div className="searchDirector">Directed by: </div>
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