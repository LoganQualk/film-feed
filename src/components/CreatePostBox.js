import db from "../tools/firebaseConfig";
import { useState } from "react";


const CreatePostBox = ({ data }) => {
    const [text, setText] = useState('');
    const [noText, setNoText] = useState(false);

    const handleTextChange = (userText) => {
        if(userText.length == 0) {
            setNoText(true);
            setText('');
        } else {
            setNoText(false);
            setText(userText)
        }
    }

    const handlePost = () => {
        if(text.length != 0) {
            try {
                let id = Date.now();
                db.ref("users/pennysreviews/posts/" + id)
                .set({
                        date: new Date(),
                        attached: [
                            {
                                url: "somePosterUrl",
                                title: "movie title",
                            }
                        ],
                        description: text,
                        emotes: [0, 0, 0, 0, 0, 0,],
                    });
                console.log("Posted: " + id);
            } catch (err) {
                console.log(err);
            }
            setText('');
        } else {
            setNoText(true);
        }
    };

    return (
        <div className="post">
            <div className="postContainer">
                <div className="postActions">
                    <div className="commentAction">
                        <div className="commentInput">
                            <input type="text" 
                                name="commentInput" 
                                className="commentInput mostlyFullWidth" 
                                placeholder="What's on your mind?" 
                                onChange={(event) => handleTextChange(event.target.value)}
                            />
                            {noText ? <div className="warningText">Must have text in post</div> : <div></div>}
                        </div>
                    </div>
                    <div>
                    <button className="defaultButton bg-quaternary" onClick={handlePost}>
                        Post
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreatePostBox;