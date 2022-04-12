// Emojis used from sensa emoji
import heartEmoji from '../images/heart.svg'
import cryingLaughingEmoji from '../images/cryingLaughing.svg'
import clapEmoji from '../images/clap.svg'
import sobEmoji from '../images/sob.svg'
import surpriseEmoji from '../images/surprise.svg'
import thumbsDownEmoji from '../images/thumbsDown.svg'
import { useState } from 'react'

const Post = ({ data }) => {
    // Need to make it so when they are selected it actually changes the data, 
    // figure I'd wait for firebase to be set up for that
    const [heartEmojiSelected, setHeartEmojiSelected] = useState(false);
    const [cryingLaughingEmojiSelected, setCryingLaughingEmojiSelected] = useState(false);
    const [clapEmojiSelected, setClapEmojiSelected] = useState(false);
    const [sobEmojiSelected, setSobEmojiSelected] = useState(false);
    const [surpriseEmojiSelected, setSurpriseEmojiSelected] = useState(false);
    const [thumbsDownEmojiSelected, setThumbsDownEmojiSelected] = useState(false);

    const displayComments = (comments, level) => {
        // Recursively gets comments from top layer to bottom
        return comments.map((comment, index) =>
            <div key={index} className='commentTree' style={{ marginLeft: level > 0 ? 20 + "px" : "" }}>
                <div className='comment'>
                    <div className='flexRow justifyBetween'>
                        <h3>{comment.user}</h3>
                        <button className="defaultButton bg-quaternary">Reply</button>
                    </div>
                    <p>{comment.text}</p>
                </div>
                {displayComments(comment.replies, level + 1)}
            </div>
        )
    }

    const updateReactions = (currentValue, reactionName) => {
        if (reactionName === "heart") {
            setHeartEmojiSelected(!currentValue);
            data.reactions.heart = currentValue ? data.reactions.heart - 1 : data.reactions.heart + 1;
        } else if (reactionName === "laugh") {
            setCryingLaughingEmojiSelected(!currentValue);
            data.reactions.laugh = currentValue ? data.reactions.laugh - 1 : data.reactions.laugh + 1;
        } else if (reactionName === "cry") {
            setSobEmojiSelected(!currentValue);
            data.reactions.cry = currentValue ? data.reactions.cry - 1 : data.reactions.cry + 1;
        } else if (reactionName === "surprise") {
            setSurpriseEmojiSelected(!currentValue);
            data.reactions.surprise = currentValue ? data.reactions.surprise - 1 : data.reactions.surprise + 1;
        } else if (reactionName === "clap") {
            setClapEmojiSelected(!currentValue);
            data.reactions.clap = currentValue ? data.reactions.clap - 1 : data.reactions.clap + 1;
        } else if (reactionName === "thumbsDown") {
            setThumbsDownEmojiSelected(!currentValue);
            data.reactions.thumbsDown = currentValue ? data.reactions.thumbsDown - 1 : data.reactions.thumbsDown + 1;
        }
    }

    return (
        <div className="post">
            <div className="postContainer">
                <div className="postContent">
                    <h2>{data.user}</h2>
                    <div className={data.attachedMovies.length > 1 ? "flexCol" : "flexRow"}>
                        <div className='flexRow wrap'>
                            {data.attachedMovies.map((movie, index) =>
                                <div key={index} className='posterContainer'>
                                    <img src={movie.imageUrl} alt={movie.name + " Poster"} />
                                    <p title={movie.name}><strong>{movie.name}</strong></p>
                                </div>
                            )}
                        </div>
                        <p className='postText'>{data.text}</p>
                    </div>
                </div>
                <div className="postActions">
                    <div className="reactionEmojis">
                        <button className={'reactionEmojiContainer' + (heartEmojiSelected ? " emojiSelected" : "")} onClick={() => updateReactions(heartEmojiSelected, "heart")}>
                            <img className='reactionEmoji' src={heartEmoji} alt="Heart Emoji" />
                            <p>{data.reactions.heart}</p>
                        </button>
                        <button className={'reactionEmojiContainer' + (cryingLaughingEmojiSelected ? " emojiSelected" : "")} onClick={() => updateReactions(cryingLaughingEmojiSelected, "laugh")}>
                            <img className='reactionEmoji' src={cryingLaughingEmoji} alt="Crying Laughing Emoji" />
                            <p>{data.reactions.laugh}</p>
                        </button>
                        <button className={'reactionEmojiContainer' + (clapEmojiSelected ? " emojiSelected" : "")} onClick={() => updateReactions(clapEmojiSelected, "clap")}>
                            <img className='reactionEmoji' src={clapEmoji} alt="Clap Emoji" />
                            <p>{data.reactions.clap}</p>
                        </button>
                        <button className={'reactionEmojiContainer' + (sobEmojiSelected ? " emojiSelected" : "")} onClick={() => updateReactions(sobEmojiSelected, "cry")}>
                            <img className='reactionEmoji' src={sobEmoji} alt="Sob Emoji" />
                            <p>{data.reactions.cry}</p>
                        </button>
                        <button className={'reactionEmojiContainer' + (surpriseEmojiSelected ? " emojiSelected" : "")} onClick={() => updateReactions(surpriseEmojiSelected, "surprise")}>
                            <img className='reactionEmoji' src={surpriseEmoji} alt="Surprise Emoji" />
                            <p>{data.reactions.surprise}</p>
                        </button>
                        <button className={'reactionEmojiContainer' + (thumbsDownEmojiSelected ? " emojiSelected" : "")} onClick={() => updateReactions(thumbsDownEmojiSelected, "thumbsDown")}>
                            <img className='reactionEmoji' src={thumbsDownEmoji} alt="Thumbs Down Emoji" />
                            <p>{data.reactions.thumbsDown}</p>
                        </button>
                    </div>
                    <hr />
                    <div className="commentAction">
                        <input type="text" name="commentInput" className="commentInput" placeholder="Type a comment..." />
                        <button className="defaultButton bg-quaternary">Comment</button>
                    </div>
                </div>
            </div>
            {
                data.replies.length > 0 &&
                <div className="commentContainer">
                    {displayComments(data.replies, 0)}
                </div>
            }
        </div>
    );
}

export default Post;