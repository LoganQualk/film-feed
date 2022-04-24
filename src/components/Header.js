import { useContext, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { GlobalContext } from '../context/GlobalContext';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';


const Header = () => {
    const { currentUser, changePage, results, displayResultsPage, displayResults, setIdAndLoad, setTenPageResults} = useContext(GlobalContext);
    const [inputDesign, setInputDesign] = useState('searchbar');
    const [invalid, setInvalid] = useState(false);

    const handleSearch = () => {
        if(document.getElementById("searchInput").value.length !== 0) {
            setTenPageResults([]);
            displayResultsPage(document.getElementById("searchInput").value);
            setIdAndLoad("More results");
            document.getElementById("searchInput").value = '';
        } else {
            setInvalid(true);
            setInputDesign('searchbar invalidSearch');
        }
    }

    const handleInputChange = (inputChange) => {
        displayResults(inputChange);
        if(inputDesign !== 'searchbar') {
            setInvalid(false);
            setInputDesign('searchbar');
        }
    };

    return ( 
        <div className="headerContainer">
            <div className="flex mainHeader">
                <span className="primary headerTitle grow">FilmFeed</span>

                <span className="doubleGrow alignCenter">
                    <div className="flexCol">
                        <div className="flexRow">
                            <input 
                                className={inputDesign}
                                id="searchInput"
                                placeholder="Search for a film/user..."
                                onChange={(e) => handleInputChange(e.target.value)}
                            />

                            <Button id="searchButton" onClick={handleSearch}>Search</Button>
                        </div>
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
                        {invalid ? <div className="invalidSearchText">Must have text to search</div> : ''}
                    </div>
                    
                </span>

                <span className="userContainer grow flexRow justifyBetween">
                    <Dropdown>
                        <Dropdown.Toggle variant="danger" className="bellStyle rounded" id="dropdown-bell">
                            <NotificationsNoneIcon />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/notif1">Notif 1</Dropdown.Item>
                            <Dropdown.Item href="#/notif2">Notif 2</Dropdown.Item>
                            <Dropdown.Item href="#/notif3">Notif 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="warning" className="profileStyle rounded" id="dropdown-penny">
                            {currentUser}
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