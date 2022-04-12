import { useContext, useState } from 'react';
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { GlobalContext } from '../context/GlobalContext';

const searchUrl =
  "https://api.themoviedb.org/3/search/movie?api_key=" +
  process.env.REACT_APP_API_KEY +
  "&query=";


const Header = () => {
    const { changePage } = useContext(GlobalContext);
    let [results, setResults] = useState([]);

    async function httpGetMovies(title) {
        if (document.getElementById("searchInput").value) {
            let response = await axios({
            method: "GET",
            url: searchUrl + title,
            });
            return response.data.results;
        }
        return null;
    }

    function displayResults(searchInput) {
        if(searchInput.length === 0 ) {
            setResults([]);
            return;
        } else {
            httpGetMovies(searchInput).then( (apiResults) => {
                    let shortenedResults = apiResults.splice(0,10);
                    shortenedResults.push(
                        {
                            title: 'Click for more results...',
                            release_date: null,
                        }
                    );
                    setResults(shortenedResults);
                }
            );
        }
    }
    // NEED TO DO SPECIFIC MOVIE PAGE
    // NEED TO MAEK WIDTH WIDTH OF SEARCHBAR

    return ( 
        <div className="headerContainer">
            <div className="flex mainHeader">
                <span className="primary headerTitle grow">FilmFeed</span>

                <span className="doubleGrow alignCenter">
                    <input 
                        className="searchbar"
                        id="searchInput"
                        placeholder="Search for a film/user..."
                        onChange={(e) => displayResults(e.target.value)}
                    />
                    <div className="searchResults flexCol">
                        {results.map((movie) => {
                            let yrReleased = null;
                            if(movie.release_date) {
                                yrReleased = movie.release_date.split("-")[0];
                            }
                            return (
                                <button key={movie.id} 
                                        className='autocomplete-items' 
                                        onClick={() => changePage(`movie=${movie.id}`)}>
                                    {movie.title} {yrReleased ? '('+yrReleased+')' : ''}
                                </button>
                            )
                        })
                        }
                    </div>
                    <Button id="searchButton">Search</Button>
                </span>

                <span className="userContainer grow flexRow justifyBetween">
                    <Dropdown>
                        <Dropdown.Toggle variant="danger" className="bellStyle rounded" id="dropdown-bell">
                            Bell
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/notif1">Notif 1</Dropdown.Item>
                            <Dropdown.Item href="#/notif2">Notif 2</Dropdown.Item>
                            <Dropdown.Item href="#/notif3">Notif 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="warning" className="profileStyle rounded" id="dropdown-penny">
                            Penny Smith
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => changePage("feed")}>My Feed</Dropdown.Item>
                            <Dropdown.Item onClick={() => changePage("profile")}>My Profile</Dropdown.Item>
                            <Dropdown.Item onClick={() => changePage("diary")}>My Diary</Dropdown.Item>
                            <Dropdown.Item onClick={() => changePage("lists")}>My Movie Lists</Dropdown.Item>
                            <Dropdown.Item onClick={() => changePage("settings")}>Settings</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </span>
            </div>

            <div className="headerSubtitle flex justifyCenter">
                <span className="light-purple-text">Log movies in your diary for your eyes only. </span>
                <span className="orange-text">Write posts about movies to keep your friends updated. </span>
                <span className="green-text">Make reviews for the world to see your critical perspective. </span>
                <span className="light-blue-text">FilmFeed is the place for all your movie-discussing needs.</span>
            </div>
        </div>
     );
}
 
export default Header;