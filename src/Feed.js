import Post from './components/Post';
import CreatePostBox from './components/CreatePostBox';
import posts from './tempData/posts';

import Header from './components/Header';

// Temp data - replace with firebase
// will probably need to add key/values that link to profile/movies
const postData = posts;

const Feed = () => {
    return ( 
        <>
        <Header />
        <div className="container">
            
            <h1>Feed</h1>
            <CreatePostBox />
            {postData.map((post, index) => <Post key={index} data={post}></Post>)}
        </div>
        </>
     );
}
 
export default Feed;