// Emojis used from sensa emoji
import heartEmoji from '../images/heart.svg'
import cryingLaughingEmoji from '../images/cryingLaughing.svg'
import clapEmoji from '../images/clap.svg'
import sobEmoji from '../images/sob.svg'
import surpriseEmoji from '../images/surprise.svg'
import thumbsDownEmoji from '../images/thumbsDown.svg'

const Post = ({ data }) => {

    const displayComments = (comments) => {
        // Recursively gets comments from top layer to bottom
        for (let i = 0; i < comments.length; i++) {
            
        }
    }

    return (
        <div className="post">
            <div className="postContent">
                <div>
                    <h3>{data.user}</h3>
                </div>
                <p>{data.text}</p>
            </div>
            <div className="postActions">
                <div className="reactionEmojis">
                    <img className='reactionEmoji' src={heartEmoji} alt="Heart Emoji" />
                    <img className='reactionEmoji' src={cryingLaughingEmoji} alt="Crying Laughing Emoji" />
                    <img className='reactionEmoji' src={clapEmoji} alt="Clap Emoji" />
                    <img className='reactionEmoji' src={sobEmoji} alt="Sob Emoji" />
                    <img className='reactionEmoji' src={surpriseEmoji} alt="Surprise Emoji" />
                    <img className='reactionEmoji' src={thumbsDownEmoji} alt="Thumbs Down Emoji" />
                </div>
                <hr />
                <div className="commentAction">
                    <input type="text" name="commentInput" className="commentInput" placeholder="Type a comment..." />
                    <button className="defaultButton bg-quaternary">Comment</button>
                </div>
            </div>
            {
                data.replies.length > 0 &&
                <div className="postComments">
                    {data.replies.map(reply =>
                        <div className='comment'>
                            <div className='flexRow justifyBetween'>
                                <h3>{reply.user}</h3>
                                <button className="defaultButton bg-quaternary">Reply</button>
                            </div>
                            <p>{reply.text}</p>
                        </div>
                    )}
                </div>
            }
        </div>
    );
}

export default Post;