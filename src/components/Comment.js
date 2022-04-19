import { useRef } from "react";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Comment = ({ index, comments, comment, level }) => {

    const { posts, setPosts, currentUser } = useContext(GlobalContext);
    const [replying, setReplying] = useState(false);
    const replyRef = useRef(null)

    const displayComments = (comments, level) => {
        // Recursively gets comments from top layer to bottom
        return comments.sort((a, b) => new Date(b.date) - new Date(a.date)).map((comment, index) =>
            <Comment key={index} index={index} comments={comments} comment={comment} level={level}></Comment>
        )
    }

    return (
        <div className='commentTree' style={{ marginLeft: level > 0 ? 20 + "px" : "" }}>
            <div className='comment'>
                <div className="paddingSmall">
                    <div className='flexRow justifyBetween'>
                        <h4>{comment.user}</h4>
                        <button className="defaultButton bg-quaternary" onClick={() => {
                            setReplying(true);
                            replyRef.current.focus();
                        }}>Reply</button>
                    </div>
                    <p>{comment.text}</p>
                </div>
                {
                    replying &&
                    <div className="commentAction bg-tertiary">
                        <input type="text" name="commentInput" className="commentInput" placeholder="Type a reply..." ref={replyRef} />
                        <button className="defaultButton bg-quaternary" onClick={() => setReplying(false)}>Discard</button>
                        <button className="defaultButton bg-quaternary" onClick={() => {
                            comments[index].replies.push({
                                "user": currentUser,
                                "date": new Date().toString(), // replace with time/date replied,
                                "text": replyRef.current.value,
                                "replies": []
                            });
                            setPosts([...posts]);
                            setReplying(false);
                            replyRef.current.value = "";
                        }}>Submit</button>
                    </div>
                }
            </div>
            {displayComments(comment.replies, level + 1)}
        </div>
    );
}

export default Comment;