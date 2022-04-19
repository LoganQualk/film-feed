import Post from './components/Post';
import CreatePostBox from './components/CreatePostBox';
import { GlobalContext } from './context/GlobalContext';

import Header from './components/Header';
import { useContext } from 'react';

// Temp data - replace with firebase
// will probably need to add key/values that link to profile/movies

const Feed = () => {
    const { posts } = useContext(GlobalContext);

    return ( 
        <>
        <Header />
        <div className="container flexCol alignCenter">
            <br />
            <CreatePostBox />
            {posts.map((post, index) => <Post key={index} data={post}></Post>)}
        </div>
        </>
     );
}
 
export default Feed;