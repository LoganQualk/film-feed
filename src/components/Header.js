import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


const Header = () => {
    return ( 
        <div className="headerContainer">
            <div className="flex mainHeader">
                <span className="primary headerTitle grow">FilmFeed</span>
                <input className="doubleGrow searchbar"></input>
                <Button>Search</Button>
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