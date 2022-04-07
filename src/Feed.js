import Post from "./components/Post";

// Temp data - replace with firebase
const posts = [
    {
        "user": "John Doe",
        "date": new Date(), // replace with date posted
        "attachedMovies": [
            "Batman Begins",
            "The Dark Knight"
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

const Feed = () => {
    return ( 
        <div className="container">
            <h1>Feed</h1>
            {posts.map((post, index) => <Post key={index} data={post}></Post>)}
        </div>
     );
}
 
export default Feed;