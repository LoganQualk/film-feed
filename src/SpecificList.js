import { useLocation } from "react-router-dom";
import logs from "./tempData/logs";

const SpecificList = () => {
    const listData = useLocation().state;

    return (
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
                            console.log(log);

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
                                        <button>Del</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>) ||
                <h1>No list specified</h1>
            }

        </div>
    );
}

export default SpecificList;