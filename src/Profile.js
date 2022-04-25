import profileIcon from './images/profile-user.svg';
import Post from "./components/Post";
import React, { useContext } from 'react';
import Header from './components/Header';
import { GlobalContext } from './context/GlobalContext';
import statsPic from './images/Movie_Statistics.png';

const Profile = () => {
    
    const { currentUser, posts } = useContext(GlobalContext);
    
    return (
        <React.Fragment>
            <Header />
            <div id="profilePage" className="flexRow justifyStart">
                <div className="profileIcon">
                    <h1 className="dark-purple-text">My Profile</h1>
                    <img id="profileSVG" src={profileIcon} alt="Profile Icon" />
                    <h2 className="tertiary">{currentUser}</h2>
                    <div>
                        <h3 className="handle-text">@{currentUser.replace(" ", "").toLowerCase()}reviews</h3>
                        <h4 className='follower-text'>Followers: 1,894,015</h4>
                        <h4 className='follower-text'>Following: 212</h4>
                    </div>
                </div>
                <div id="profilePosts" className="flexCol alignCenter">
                    <img src={statsPic} alt="" height={400}/>
                    <br />
                    <br />
                    <h1>My Posts</h1>
                    {posts.filter((post) => post.user === currentUser).map((post, index) => <Post key={index} data={post}></Post>)}
                </div>
            </div>
        </React.Fragment>

    );
}

export default Profile;