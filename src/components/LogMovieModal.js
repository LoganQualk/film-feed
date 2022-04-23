import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import ReactStars from "react-rating-stars-component";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "react-bootstrap";
import { generateID } from "../tools/generateID";


const LogMovieModal = () => {
    const { movieName, movieId, movieYr, movieUrl, setModalVisible, specificLogs, setSpecificLogs, 
        logs, setLogs, lists, setLists } = useContext(GlobalContext);
    const [date, setDate] = useState(new Date());

    const [rating, setRating] = useState(0);
    const [ratingChanged, setRatingChanged] = useState(false);

    const [notes, setNotes] = useState(null);
    const [logChanged, setLogChanged] = useState(false);

    const handleDate = (input) => {
        setDate(input);
        console.log('date changed: ' + input);
    };
    const handleRating = (newRating) => {
        setRating(newRating);
        console.log('rating changed: ' + newRating);
        setRatingChanged(true);
    };
    const handleLog = (input) => {
        setNotes(input);
        console.log('notes changed: ' + input);
        setLogChanged(true);
    };

    const handleSubmit = (input) => {
        let oldLogs = specificLogs;

        let logText = logChanged ? notes : null;
        let logRating = ratingChanged ? rating : null;

        let newLog = {
                        "title": movieName,
                        "date": date,
                        "text": logText,
                        "rating": logRating,
                        "year": movieYr,
                        "imageUrl": movieUrl,
                    };

        // oldLogs.push(newLog);
        setSpecificLogs([...specificLogs, newLog]);

        // This code will add it to the logs data instead of specificLogs, used in specific lists
        let newLogs = logs;
        newLog.text = logText;
        newLog.date = new Date(newLog.date);
        const logId = generateID();
        newLogs[logId] = newLog;
        setLogs({...newLogs})

        let newLists = lists;
        for (let i = 0; i < lists.length; i++) {
            for (let j = 0; j < lists[i].attachedMovies.length; j++) {
                if (lists[i].attachedMovies[j].id === movieId) {
                    newLists[i].attachedMovies[j].log = logId;
                }
            }
        }
        setLists([...newLists])
        console.log('NEW LOGDATA: ' + JSON.stringify(logs));

        setModalVisible(false);
    };

    return ( 
        <div className="dark-purple-text modalPadding">
            <h1>Log <strong><em className="dark-dark-purple-text">{movieName}</em></strong> to Diary</h1>
            <div className="modalDate">Date watched: <DatePicker selected={date} onChange={(input) => handleDate(input)} /></div>
            <div>Rate the movie (optional): 
                <div className="flex justifyCenter">
                    <ReactStars
                        count={5}
                        onChange={handleRating}
                        size={36}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                    />
                </div>
            </div>
            <div className="modalNotes">Notes (optional): 
                <div className="flex justifyCenter">
                    <textarea cols="80" rows="5" onChange={(e) => handleLog(e.target.value)}></textarea>
                </div>
            </div>
            <div className="flex justifyEnd modalLogButton">
                <Button onClick={handleSubmit}>Log</Button>
            </div>
        </div>
     );
}
 
export default LogMovieModal;