import { useContext } from 'react';
import { GlobalContext } from "./context/GlobalContext";
import SpecificPostBox from './components/SpecificPostBox';
import Post from './components/Post';
import mockReviews from './tempData/reviews';


const MovieReviews = () => {
    const { movieName, movieYr, movieUrl, posts } = useContext(GlobalContext);

    let mockData = mockReviews(movieName, movieYr, movieUrl);
    let specificReviews = posts.filter((postObj) => {
        if(postObj["attachedMovies"].length === 1) {
            let postObjMovie = postObj["attachedMovies"][0];
            if(postObjMovie.name === movieName && postObjMovie.year === movieYr && postObjMovie.imageUrl === movieUrl) {
                return true;
            }
        }
        return false;
    });
    for(let i = 0; i < mockData.length; i++) {
        specificReviews.push(mockData[i]);
    }

    return ( 
        <div className="container flex flexCol alignCenter flexGrow">
            <SpecificPostBox />
            {specificReviews.sort((a, b) => new Date(b.date) - new Date(a.date)).map((post, index) => <Post key={index} data={post}></Post>)}
        </div>
    );
}
 
export default MovieReviews;