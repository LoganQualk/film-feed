import logs from "./tempData/logs";
import { useParams } from "react-router-dom";
import Header from "./components/Header";
import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import { generateID } from "./tools/generateID";

const SpecificList = () => {
    const { lists, setLists, logs, setLogs, setModalPage, setModalVisible, setMovieName } = useContext(GlobalContext);
    const currentList = useParams().listName;

    const listData = lists.find(list => list.name === currentList);

    const logMovie = () => {
        const newLogs = logs;
        newLogs[generateID()] = {
            "title": "The Dark Knight 4",
            "date": new Date('2/17/2022'),
            "text": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ex ad cupiditate adipisci ut illo suscipit vitae doloremque asperiores. Doloremque quos repellendus, iusto omnis voluptatibus impedit eaque laboriosam. Earum, sit.",
            "rating": 3,
            "year": 2008,
            "imageUrl": "https://m.media-amazon.com/images/I/61zBUhQj22L._AC_SY679_.jpg"
        }
        setLogs({...newLogs});
    }

    return (
        <>
            <Header></Header>
            <div id="listPage" className="containerWithBackground">
                {
                    (listData !== null &&
                        <div>
                            <div className="flexRow justifyBetween alignCenter">
                                <h1>{listData.name}</h1>
                                <button className="defaultButton bg-quaternary">Add to list</button>
                            </div>
                            <hr />
                            {
                                listData.attachedMovies.map((movie, index) => {
                                    const log = logs[movie.log];

                                    return (
                                        <div key={index} className="list">
                                            <img className="listPoster" src={movie.imageUrl} alt={movie.name + " Poster"} />
                                            <div className="flexCol justifyBetween grow">
                                                <div>
                                                    <h2>{movie.name}</h2>
                                                    {
                                                        log &&
                                                        <p className="listDescription">{log.text}</p>
                                                    }
                                                </div>
                                                {
                                                    log &&
                                                    <p><em>Watched on {new Date(log.date).toLocaleDateString()}</em></p>
                                                }
                                            </div>
                                            <div className="flexCol justifyBetween">
                                                <button onClick={() => {
                                                    setMovieName(movie.name);
                                                    setModalPage("logMovie");
                                                    setModalVisible(true);
                                                }}>Log</button>
                                                <button onClick={() => {
                                                    const listIndexToChange = lists.findIndex(list => list.name === currentList);
                                                    const newList = lists;
                                                    newList[listIndexToChange].attachedMovies = newList[listIndexToChange].attachedMovies.filter(movieInList => movie.id !== movieInList.id);
                                                    setLists([...newList]);
                                                }}>Del</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>) ||
                    <h1>No list specified</h1>
                }
            </div>
        </>
    );
}

export default SpecificList;