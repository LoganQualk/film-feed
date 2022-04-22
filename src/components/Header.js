import { useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { GlobalContext } from '../context/GlobalContext';


const Header = () => {
    const { changePage, results, displayResults, setIdAndLoad } = useContext(GlobalContext);

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
                                        onClick={() => setIdAndLoad(movie.id)}>
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
                <span className="light-purple-text">Log watched movies in your diary for your eyes only. </span>
                <span className="orange-text">Write posts to keep your friends updated. </span>
                <span className="green-text">Make review posts for the world to see your critical perspective. </span>
                <span className="light-blue-text">FilmFeed is the place for all your movie-discussing needs.</span>
            </div>
        </div>
     );
}
 
export default Header;