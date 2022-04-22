import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import ReactStars from "react-rating-stars-component";

const compute5StarRating = (value) => {
    const step = 0.5;
    let inv = 1.0 / step;
    return Math.round(parseInt(value) * inv) / (inv * 2.0);
};

const Results = () => {
    const { allResults, userSearchInput, setIdAndLoad, httpGetCredits } = useContext(GlobalContext);

    async function getDirectors(oneId) {
        return httpGetCredits(oneId).then((response) => {
            let responseDirectors = [];
            response.crew.filter((crewObj) => {if(crewObj.job === "Director") {return true;} else {return false;}})
                         .map((directorObj) => {
                            return responseDirectors.push(directorObj.name);
                        });
            return {id: response.id, directors: responseDirectors};
        });
    };

    let directorRequests = allResults.map((resultObj) => getDirectors(resultObj.id));

    Promise.all(directorRequests).then((response) => {
        response.forEach((responseObj) => {
            if(responseObj) {
                if(responseObj.directors !== 0 && responseObj.id) {
                    document.getElementById(`${responseObj.id}Director`).innerHTML = String(responseObj.directors).replace(/,/g, ', ');
                } else {
                    document.getElementById(`${responseObj.id}Director`).innerHTML = `<em>Unknown</em>`;
                }
                
            }
        });
        return response;
    }).catch((err) => console.log('PROMISE.ALL ERROR: ' + err));

    return (
        <>
            <div id="listPage" className="containerWithBackground">
                <div className="flexRow alignCenter">
                    <div className="searchResultsFor">Search Results for "{userSearchInput}"...</div>
                </div>
                <hr />
                {
                    allResults.map((movieObj) =>
                        {
                            let posterUrl = `https://image.tmdb.org/t/p/original/${movieObj.poster_path}`;
                            return(
                            <div key={movieObj.id} className="resultsContainer">
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
                                        <div className="searchDirector" >Directed by: <span id={`${movieObj.id}Director`}></span></div>
                                    </div>
                                </button>
                            </div>);
                        }
                    )
                }
            </div>
        </>
    );
}

export default Results;