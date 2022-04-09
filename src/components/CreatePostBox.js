import db from "../tools/firebaseConfig";


const CreatePostBox = ({ data }) => {
    const handlePost = () => {
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
                    description: "this is the content of the post",
                    emotes: [0, 0, 0, 0, 0, 0,],
                });
            console.log("Posted: " + id);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="post">
            <div className="postContainer">
                <div className="postActions">
                    <div className="commentAction">
                        <input type="text" 
                            name="commentInput" 
                            className="commentInput" 
                            placeholder="What's on your mind?" 
                        />
                    </div>
                    <hr />
                    <button className="defaultButton bg-quaternary" onClick={handlePost}>
                        Post
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CreatePostBox;