import { useContext } from "react";
import Header from "./components/Header";
import { GlobalContext } from "./context/GlobalContext";

const Lists = () => {
    const { changePage, lists, setLists, setModalPage, setModalVisible, setMovieName } = useContext(GlobalContext);

    return (
        <>
            <Header />
            <div id="listPage" className="containerWithBackground">
                <div className="flexRow justifyBetween alignCenter">
                    <h1>Lists</h1>
                    <button className="defaultButton bg-quaternary" onClick={() => {
                        setMovieName(null);
                        setModalVisible(true);
                        setModalPage("createList");
                    }}>Create List</button>
                </div>
                <hr />
                {
                    lists.map((list, index) =>
                        <div key={index} className="list">
                            {list.attachedMovies.map((movie, movieIndex) =>
                                <img key={movieIndex} className="listPoster" src={movie.imageUrl} alt={movie.name + " Poster"} />
                            )}
                            <div className="flexCol justifyBetween grow">
                                <div>
                                    <h2 className="pointer" onClick={() => changePage("lists=" + list.name, list)}>{list.name}</h2>
                                    <p className="listDescription">{list.description}</p>
                                </div>
                                <p><em>Created on {new Date(list.date).toLocaleDateString()}</em></p>
                            </div>
                            <div className="flexCol justifyEnd">
                                <button onClick={() => setLists(lists.filter(listToDelete => listToDelete.id !== list.id))}>Del</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
}

export default Lists;