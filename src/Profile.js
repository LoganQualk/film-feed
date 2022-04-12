import profileIcon from './images/profile-user.svg';
import Post from "./components/Post";
import React from 'react';
import Header from './components/Header';

const posts = [
    {
        "user": "John Doe",
        "date": new Date(), // replace with date posted
        "attachedMovies": [
            {
                "name": "The Dark Knightiasldkfhjalksj",
                "year": 2008,
                "imageUrl": "https://m.media-amazon.com/images/I/61zBUhQj22L._AC_SY679_.jpg"
            },
            {
                "name": "The Dark Noot",
                "year": 2008,
                "imageUrl": "https://m.media-amazon.com/images/I/61zBUhQj22L._AC_SY679_.jpg"
            }
        ],
        "text": "Which of these movies is yall's favorite?  I just watched both and I think I prefer The Dark Knight.",
        "reactions": {
            "heart": 0,
            "laugh": 0,
            "cry": 0,
            "surprise": 0,
            "clap": 0,
            "thumbsDown": 0
        },
        "replies": [ // using wording "replies" since I think it makes more sense in a nested JSON context, but can replace with comments if necessary
            {
                "user": "Mary Jane",
                "date": new Date(), // replace with time/date replied,
                "text": "Good comment",
                "replies": [
                    {
                        "user": "Bingo Boffman",
                        "date": new Date(), // replace with time/date replied,
                        "text": "Great comment",
                        "replies": [
                            {
                                "user": "Mary Jane",
                                "date": new Date(), // replace with time/date replied,
                                "text": "Good comment",
                                "replies": [
                                    {
                                        "user": "Bingo Boffman",
                                        "date": new Date(), // replace with time/date replied,
                                        "text": "Great comment",
                                        "replies": []
                                    }
                                ]
                            },
                            {
                                "user": "Jonah Babona",
                                "date": new Date(), // replace with time/date replied,
                                "text": "Incredible comment",
                                "replies": []
                            }
                        ]
                    }
                ]
            },
            {
                "user": "Jonah Babona",
                "date": new Date(), // replace with time/date replied,
                "text": "Incredible comment",
                "replies": [{
                    "user": "Jonah Babona",
                    "date": new Date(), // replace with time/date replied,
                    "text": "Incredible comment",
                    "replies": []
                }]
            }
        ]
    }
]

const Profile = () => {
    return (
        <React.Fragment>
            <Header />
            <div id="profilePage">
                <div className="profileIcon flexCol alignCenter">
                    <h1 className="dark-purple-text">My Profile</h1>
                    <img id="profileSVG" src={profileIcon} alt="Profile Icon" />
                    <h2 className="tertiary">Penny Smith</h2>
                    <div>
                        <h3 className="handle-text">@pennysreviews</h3>
                        <h4 className='follower-text'>Followers: 1,894,015</h4>
                        <h4 className='follower-text'>Following: 212</h4>
                    </div>
                </div>
                <div className="container">
                    <h1>My Posts</h1>
                    {posts.map((post, index) => <Post key={index} data={post}></Post>)}
                </div>
            </div>
        </React.Fragment>

    );
}

export default Profile;