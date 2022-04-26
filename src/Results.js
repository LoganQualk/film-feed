import { useContext, useState } from "react";
import { GlobalContext } from "./context/GlobalContext";
import ReactStars from "react-rating-stars-component";
import Dropdown from 'react-bootstrap/Dropdown';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const compute5StarRating = (value) => {
    const step = 0.5;
    let inv = 1.0 / step;
    return Math.round(parseInt(value) * inv) / (inv * 2.0);
};

const filterGenres = ['Drama', 'Comedy', 'Horror', 'Action', 'Sci-fi', 'Fantasy', 'Romance', 'Western', 'Thriller'];

const filterRates = ['G', 'PG', 'PG-13', 'R', 'NC-17'];

const Results = () => {
    const { allResults, userSearchInput, setIdAndLoad, httpGetCredits, httpGetTenPageMovies } = useContext(GlobalContext);
    const [sorted, setSorted] = useState("Popularity");

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


    const handlePopularity = () => {
        setSorted("Popularity");
    };

    const handleHighestRated = () => {
        setSorted("Highest Rated");
    };

    const handleDateReleased = () => {
        setSorted("Date Released");
    };

    return (
        <>
            <div id="listPage" className="containerWithBackground">
                <div className="flex flexRow alignCenter justifyBetween">
                    <div className="searchResultsFor">Search Results for "{userSearchInput}"...</div>
                    <div className="flexRow">
                        <Dropdown className="searchDropdown">
                            <Dropdown.Toggle variant="primary" className="" id="dropdown-search-sort">
                                Sort by: {sorted}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={handlePopularity}>Popularity</Dropdown.Item>
                                <Dropdown.Item onClick={handleHighestRated}>Highest Rated</Dropdown.Item>
                                <Dropdown.Item onClick={handleDateReleased}>Date Released</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown className="searchDropdown" autoClose={false}>
                            <Dropdown.Toggle variant="primary" className="" id="dropdown-search-filter">
                                Filter by: 
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.ItemText>
                                    Released between: 
                                    <div className="flexRow">
                                        <input className="filterYr" placeholder="Start year" />
                                        <div className="filterAnd">and</div>
                                        <input className="filterYr" placeholder="End year" />
                                    </div>
                                    <br />
                                </Dropdown.ItemText>
                                <Dropdown.Divider />
                                <Dropdown.ItemText>
                                    Genres:
                                    <div>
                                    <FormGroup>
                                        {filterGenres.map((genreStr) => (<FormControlLabel key={genreStr} control={<Checkbox />} label={genreStr} />))}
                                    </FormGroup>
                                    </div>
                                    <br />
                                </Dropdown.ItemText>
                                <Dropdown.Divider />
                                <Dropdown.ItemText>
                                    Rates: 
                                    <FormGroup>
                                        {filterRates.map((rateStr) => (<FormControlLabel key={rateStr} control={<Checkbox />} label={rateStr} />))}
                                    </FormGroup>
                                </Dropdown.ItemText>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    
                </div>
                <hr />
                {
                    allResults.map((movieObj) =>
                        {
                            let posterUrl = `https://image.tmdb.org/t/p/original/${movieObj.poster_path}`;
                            return(
                            <div key={movieObj.id} className="resultsContainer">
                                <button key={movieObj.id} className="searchResultsObj" onClick={() => {setIdAndLoad(movieObj.id)}}>
                                    {movieObj.poster_path ? <img className="resultsPoster" src={posterUrl} alt={movieObj.title + " Poster"} /> : <div className="searchNoPoster">No Poster</div>}
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

                <Stack className="alignCenter" spacing={2}>
                    <Pagination count={10} defaultPage={1} variant="outlined" color="secondary" onChange={(e, pageNum) => httpGetTenPageMovies(userSearchInput, pageNum)} />
                </Stack>
            </div>
        </>
    );
}

export default Results;