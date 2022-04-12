import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

const searchUrl =
  "https://api.themoviedb.org/3/search/movie?api_key=" +
  process.env.REACT_APP_API_KEY +
  "&query=";


const Header = () => {
    const nav = useNavigate();
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
        let results = httpGetMovies(searchInput).then( (apiResults) => {
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

    // NEED TO CLEAR LIST WHEN INPUT IS CLEARED
    // NEED TO DO SPECIFIC MOVIE PAGE
    // NEED TO MAEK WIDTH WIDTH OF SEARCHBAR

    return ( 
        <div className="headerContainer">
            <div className="flex mainHeader">
                <span className="primary headerTitle grow">FilmFeed</span>

                <span className="doubleGrow">
                    <input 
                        className="searchbar"
                        id="searchInput"
                        placeholder="Search for a film/user..."
                        onChange={(e) => displayResults(e.target.value)}
                    />
                    <div className="searchResults">
                        {results.map((movie) => {
                            // console.log(movie);
                            let yrReleased = null;
                            if(movie.release_date) {
                                yrReleased = movie.release_date.split("-")[0];
                            }
                            return (
                                <div key={movie.id} className='autocomplete-items'>{movie.title} {yrReleased ? '('+yrReleased+')' : ''}</div>
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
                            <Dropdown.Item href="#/feed">My Feed</Dropdown.Item>
                            <Dropdown.Item href="#/profile">My Profile</Dropdown.Item>
                            <Dropdown.Item href="#/diary">My Diary</Dropdown.Item>
                            <Dropdown.Item href="#/lists">My Movie Lists</Dropdown.Item>
                            <Dropdown.Item href="#/settings">Settings</Dropdown.Item>
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