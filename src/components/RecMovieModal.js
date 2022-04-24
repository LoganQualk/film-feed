import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "react-bootstrap";
import SearchIcon from '@mui/icons-material/Search';


const RecMovieModal = () => {
    const { movieName, movieId, movieYr, movieUrl, setModalVisible } = useContext(GlobalContext);

    const handleChange = (input) => {
        console.log('rec input: ' + input);
    };

    const handleSubmit = () => {
        setModalVisible(false);
    };

    return ( 
        <div className="dark-purple-text modalPadding">
            <h1>Recommend <strong><em className="dark-dark-purple-text">{movieName}</em></strong> to...</h1>
            <div className="flex flexRow justifyCenter">
                <input className="userSearch" placeholder="Search for a user..."/>
                <button className="userSearchButton"><SearchIcon /></button>
            </div>
            <div className="flex justifyEnd modalLogButton">
                <Button onClick={handleSubmit}>Recommend</Button>
            </div>
        </div>
     );
}
 
export default RecMovieModal;