import { useContext } from 'react';
import { GlobalContext } from "./context/GlobalContext";
import CreatePostBox from './components/CreatePostBox';
import Post from './components/Post';
import reviews from './tempData/reviews';


const MovieReviews = () => {
    const { movieName, movieYr, movieUrl } = useContext(GlobalContext);

    return ( 
        <div className="container flex flexCol alignCenter flexGrow">
            <CreatePostBox />
            {reviews(movieName, movieYr, movieUrl).sort((a, b) => new Date(b.date) - new Date(a.date)).map((post, index) => <Post key={index} data={post}></Post>)}
        </div>
    );
}
 
export default MovieReviews;