import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import Dropdown from 'react-bootstrap/Dropdown';
import usersData from './tempData/users';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const UserResults = () => {
    const { userSearchInput } = useContext(GlobalContext);

    return (
        <>
            <div id="listPage" className="containerWithBackground">
                <div className="flex flexRow alignCenter justifyBetween">
                    <div className="searchResultsFor">Search Results for "{userSearchInput}"...</div>
                    <div className="flexRow">
                        <Dropdown className="searchDropdown" focusFirstItemOnShow={false}>
                            <Dropdown.Toggle variant="dark" className="" id="dropdown-search-sort">
                                Sort by: Popularity
                            </Dropdown.Toggle>
                        </Dropdown>

                        <Dropdown className="searchDropdown" variant="dark" focusFirstItemOnShow={false}>
                            <Dropdown.Toggle variant="dark" className="" id="dropdown-search-sort">
                                Filter by:
                            </Dropdown.Toggle>
                        </Dropdown>
                    </div>
                    
                </div>
                <hr />
                {
                    usersData
                        .filter((user) => {
                            if(user.username.includes(userSearchInput) || user.name.includes(userSearchInput)) {
                                return true;
                            }
                            return false;
                        })
                        .map((userObj) =>
                        {
                            return(
                            <div key={userObj.username} className="resultsContainer flex">
                                <div className="userSearchResultsObj justifyBetween">

                                    <div className="flexRow">
                                        <AccountCircleIcon style={{fontSize: '60px'}} />
                                        <div className="flexCol searchInfo alignStart">
                                            <div className="searchTitle">{userObj.name}</div>
                                            <div className="searchDirector">@{userObj.username}</div>
                                        </div>
                                    </div>
                                    
                                    <div className="flexCol searchInfo">
                                        <div className="searchDirector">Following: {userObj.following}</div>
                                        <div className="searchDirector">Followers: {userObj.followers}</div>
                                    </div>
                                    <div className="folContainer">
                                        <button className={userObj.isFollowing ? 'unfolButton' : 'folButton'}>{userObj.isFollowing ? 'Unfollow' : 'Follow'}</button>
                                    </div>
                                    
                                </div>
                            </div>);
                        }
                    )
                }
            </div>
        </>
    );
}

export default UserResults;