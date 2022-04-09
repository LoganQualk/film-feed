import { useLocation } from "react-router-dom";

const SpecificList = () => {
    const listData = useLocation().state;

    return (
        <div id="listPage" className="containerWithBackground">
            <div className="flexRow justifyBetween alignCenter">
                <h1>{listData.name}</h1>
                <button className="defaultButton bg-quaternary">Add to list</button>
            </div>
            <hr />
            {
                listData.attachedMovies.map((movie, index) =>
                    <div key={index} className="list">
                        <img className="listPoster" src={movie.imageUrl} alt={movie.name + " Poster"} />
                        <div className="flexCol justifyBetween grow">
                            <div>
                                <h2>{movie.name}</h2>
                                <p className="listDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quidem inventore eum ducimus id cum porro, est in numquam neque alias soluta optio facere ea dolor pariatur doloribus ipsum totam?</p>
                            </div>
                            <p><em>Watched on *some date*</em></p>
                        </div>
                        <div className="flexCol justifyBetween">
                            <button>Log</button>
                            <button>Del</button>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default SpecificList;