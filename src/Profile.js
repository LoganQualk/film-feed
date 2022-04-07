import profileIcon from './images/profile-user.svg';
import Post from "./components/Post";

const posts = [
    {
        "user": "Penny Smith",
        "date": new Date(),
        "attchedMoves": [
            "Sharkboy and Lavagirl"
        ],
        "text": "I absolutely love this movie! I watched it every day as a kid!!!",
        "reactions": {
            "heart": 0,
            "laugh": 0,
            "cry": 0,
            "surprise": 0,
            "clap": 0,
            "thumbsDown": 0
        },
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

const Profile = () => {
    return (
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
    );
}

export default Profile;