import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { generateID } from "../tools/generateID";

const SpecificPostBox = () => {
    const [text, setText] = useState('');
    const [noText, setNoText] = useState(false);
    const { createPost, movieName, movieYr, movieUrl } = useContext(GlobalContext);

    const handleTextChange = (userText) => {
        if (userText.length === 0) {
            setNoText(true);
            setText('');
        } else {
            setNoText(false);
            setText(userText);
        }
    }

    const handlePost = () => {
        if (text.length !== 0) {
            createPost({
                "id": generateID(),
                "user": "Penny Smith",
                "date": new Date().toString(),
                "attachedMovies": [
                    {
                        "name": movieName,
                        "year": movieYr,
                        "imageUrl": movieUrl,
                    },
                ],
                "text": text,
                "reactions": {
                    "heart": 0,
                    "laugh": 0,
                    "cry": 0,
                    "surprise": 0,
                    "clap": 0,
                    "thumbsDown": 0
                },
                "replies": []
            });
            setText('');
        } else {
            setNoText(true);
        }
    };

    return (
        <div id="reviewPostBox">
            <div className="flexRow alignCenter">
                <div className='flexRow wrap'>
                    <div className='posterContainer'>
                        <img src={movieUrl} alt={movieName + " Poster"} />
                        <p title={movieName}><strong>{movieName}</strong></p>
                    </div>
                </div>
                <div className="reviewText">
                    <textarea 
                        type="text"
                        className="postText marginBottomSmall"
                        placeholder="Write a review"
                        rows="5"
                        cols="60"
                        onChange={(event) => handleTextChange(event.target.value)}
                    />
                </div>
            </div>

            {noText ? <div className="warningText">Must have text in post</div> : <div></div>}

            <div className="flex alignEnd">
                <button id="postButton" className="defaultButton bg-quaternary" onClick={() => handlePost()}>
                    Post
                </button>
            </div>
        </div>
    );
}

export default SpecificPostBox;