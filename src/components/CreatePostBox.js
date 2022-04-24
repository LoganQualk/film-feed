// import db from "../tools/firebaseConfig";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { generateID } from "../tools/generateID";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import ButtonGroup from "@mui/material/ButtonGroup";

const CreatePostBox = () => {
    const [text, setText] = useState('');
    const [noText, setNoText] = useState(false);
    const { createPost, setModalPage, setModalVisible, currentUser } = useContext(GlobalContext);

    const handleTextChange = (userText) => {
        if (userText.length === 0) {
            setNoText(true);
            setText('');
        } else {
            setNoText(false);
            setText(userText);
        }
    }

    const postTexts = ["Post to friends", "Post to public"]
    const [postButtonText, setPostButtonText] = useState(postTexts[0])

    const handlePost = () => {
        if (text.length !== 0) {
            createPost({
                "id": generateID(),
                "user": currentUser,
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
                <Dropdown as={ButtonGroup}>
                    <Button onClick={() => handlePost()}>{postButtonText}</Button>

                    <Dropdown.Toggle split id="dropdown-split-basic" />

                    <Dropdown.Menu>
                        {postTexts.filter(postText => postText !== postButtonText).map(postText => <Dropdown.Item onClick={() => setPostButtonText(postText)}>{postText}</Dropdown.Item>)}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
}

export default CreatePostBox;