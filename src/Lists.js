import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import lists from "./tempData/lists";

const Lists = () => {

    const listData = lists;

    const {changePage} = useContext(GlobalContext);

    return (
        <div id="listPage" className="containerWithBackground">
            <div className="flexRow justifyBetween alignCenter">
                <h1>Lists</h1>
                <button className="defaultButton bg-quaternary">Create List</button>
            </div>
            <hr />
            {
                listData.map((list, index) =>
                    <div key={index} className="list pointer" onClick={() => changePage("list", list)}>
                        {lists[0].attachedMovies.map((movie, movieIndex) =>
                            <img key={movieIndex} className="listPoster" src={movie.imageUrl} alt={movie.name + " Poster"} />
                        )}
                        <div className="flexCol justifyBetween grow">
                            <div>
                                <h2>{list.name}</h2>
                                <p className="listDescription">{list.description}</p>
                            </div>
                            <p><em>Created on {list.date.toLocaleDateString()}</em></p>
                        </div>
                        <div className="flexCol justifyEnd">
                            <button>Del</button>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Lists;