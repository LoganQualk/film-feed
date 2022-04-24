// import db from "../tools/firebaseConfig";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { generateID } from "../tools/generateID";

const CreatePostBox = () => {
    const [text, setText] = useState('');
    const [noText, setNoText] = useState(false);
    const { createPost, setModalPage, setModalVisible } = useContext(GlobalContext);

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
                "attachedMovies": [], // we will handle this later
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
            // try {
            //     let id = Date.now();
            //     db.ref("users/pennysreviews/posts/" + id)
            //     .set({
            //             date: new Date(),
            //             attached: [
            //                 {
            //                     url: "somePosterUrl",
            //                     title: "movie title",
            //                 }
            //             ],
            //             description: text,
            //             emotes: [0, 0, 0, 0, 0, 0,],
            //         });
            //     console.log("Posted: " + id);
            // } catch (err) {
            //     console.log(err);
            // }
            setText('');
        } else {
            setNoText(true);
        }
    };

    return (
        <div id="createPostBox">
            <textarea type="text"
                name="postInput"
                className="postInput fullWidth marginBottomSmall"
                placeholder="What's on your mind?"
                onChange={(event) => handleTextChange(event.target.value)}
            />
            {noText ? <div className="warningText">Must have text in post</div> : <div></div>}
            <div className="flexRow justifyBetween fullWidth">
                <button className="defaultButton bg-quaternary" onClick={() => {
                    setModalPage("attachMovie");
                    setModalVisible(true);
                }}>Attach Movie</button>
                <button id="postButton" className="defaultButton bg-quaternary" onClick={() => handlePost()}>
                    Post
                </button>
            </div>
        </div>
    );
}

export default CreatePostBox;