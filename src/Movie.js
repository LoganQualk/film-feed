import { useContext, useState } from 'react';
import { GlobalContext } from './context/GlobalContext';
import Header from './components/Header';


const Movie = () => {
    const { changePage, movieId } = useContext(GlobalContext);
    // console.log('MOVIE ID: ' + movieId);

    return ( 
        <div>
            <Header />
            <h1>{movieId}</h1>
        </div>
     );
}
 
export default Movie;