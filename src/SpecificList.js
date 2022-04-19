import logs from "./tempData/logs";
import { useParams } from "react-router-dom";
import Header from "./components/Header";
import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";

const SpecificList = () => {
    const { lists, setLists } = useContext(GlobalContext);
    const currentList = useParams().listName;

    const listData = lists.find(list => list.name === currentList);

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
                                                    <p><em>Watched on {log.date.toLocaleDateString()}</em></p>
                                                }
                                            </div>
                                            <div className="flexCol justifyBetween">
                                                <button>Log</button>
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