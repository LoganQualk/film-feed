import { useContext } from "react";
import Header from "./components/Header";
import { GlobalContext } from "./context/GlobalContext";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Lists = () => {
    const { changePage, lists, setLists, setModalPage, setModalVisible, setMovieName } = useContext(GlobalContext);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 0 },
            items: 3,
        }
    };

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
                    lists.map((list, index) => {
                        const blankPostersNeeded = Math.max(3 - list.attachedMovies.length, 0);
                        let blankPosters = [];
                        for (let i = 0; i < blankPostersNeeded; i++) {
                            blankPosters.push(0)
                        }

                        return (
                            <div key={index} className="list">
                                {/* {list.attachedMovies.map((movie, movieIndex) =>
                                <img key={movieIndex} className="listPoster" src={movie.imageUrl} alt={movie.name + " Poster"} />
                            )} */}
                                <Carousel shouldResetAutoplay={false} containerClass="carousel" sliderClass="carousel" itemClass="carouselImage" responsive={responsive}>
                                    {list.attachedMovies.map((movie, movieIndex) =>
                                        <img key={movieIndex} className="listPoster" src={movie.imageUrl} alt={movie.name + " Poster"} />
                                    )}
                                    {blankPosters.map((blankPoster, index) => <div className="listPoster" key={index}></div>)}
                                </Carousel>
                                <div className="flexCol justifyBetween grow">
                                    <div>
                                        <h2 className="pointer" onClick={() => changePage("lists=" + list.name, list)}>{list.name}</h2>
                                        <p className="listDescription">{list.description}</p>
                                    </div>
                                    <p><em>Created on {new Date(list.date).toLocaleDateString()}</em></p>
                                </div>
                                <div className="flexCol justifyEnd">
                                    <button className="defaultButton bg-alarm" onClick={() => setLists(lists.filter(listToDelete => listToDelete.id !== list.id))}>Delete</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default Lists;