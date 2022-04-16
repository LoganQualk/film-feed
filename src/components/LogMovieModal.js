import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const LogMovieModal = () => {
    const { movieName } = useContext(GlobalContext);

    return ( 
        <div>
            <h1>Log {movieName} to Diary</h1>
        </div>
     );
}
 
export default LogMovieModal;