// import db from "../tools/firebaseConfig";
import { useContext, useState, useRef } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { generateID } from "../tools/generateID";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import ButtonGroup from "@mui/material/ButtonGroup";

const CreatePostBox = () => {
    const defaultPostText = useRef(null);
    const { createPost, setModalPage, setModalVisible, currentUser } = useContext(GlobalContext);

    const postTexts = ["Post to friends", "Post to public"]
    const [postButtonText, setPostButtonText] = useState(postTexts[0])

    const handlePost = () => {
        if (defaultPostText.current.value.length !== 0) {
            createPost({
                "id": generateID(),
                "user": currentUser,
                "date": new Date().toString(),
                "attachedMovies": [], // we will handle this later
                "text": defaultPostText.current.value,
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
            defaultPostText.current.value = '';
        } else {
            alert("Must have text in post");
        }
    };

    return (
        <div id="createPostBox">
            <textarea type="text"
                name="postInput"
                className="postInput fullWidth marginBottomSmall"
                placeholder="What's on your mind?"
                ref={defaultPostText}
                // onChange={(event) => handleTextChange(event.target.value)}
            />
            <div className="flexRow justifyBetween fullWidth">
                <button className="defaultButton bg-quaternary" onClick={() => {
                    setModalPage("attachMovie");
                    setModalVisible(true);
                }}>Attach Movie</button>
                <Dropdown as={ButtonGroup}>
                    <Button onClick={() => handlePost()}>{postButtonText}</Button>

                    <Dropdown.Toggle split id="dropdown-split-basic" />

                    <Dropdown.Menu>
                        {postTexts.filter(postText => postText !== postButtonText).map(postText => <Dropdown.Item key={postText} onClick={() => setPostButtonText(postText)}>{postText}</Dropdown.Item>)}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
}

export default CreatePostBox;