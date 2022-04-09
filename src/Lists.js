const Lists = () => {

    const lists = [
        {
            "name": "Fast and Furious Movies",
            "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis neque consectetur placeat nostrum ad labore odit, beatae vel maiores autem quam exercitationem sapiente ab dolor error, perspiciatis nisi earum totam.",
            "date": new Date(),
            "attachedMovies": [
                {
                    "name": "The Dark Knightiasldkfhjalksj",
                    "year": 2008,
                    "imageUrl": "https://m.media-amazon.com/images/I/61zBUhQj22L._AC_SY679_.jpg"
                },
                {
                    "name": "The Dark Noot",
                    "year": 2008,
                    "imageUrl": "https://m.media-amazon.com/images/I/61zBUhQj22L._AC_SY679_.jpg"
                },
                {
                    "name": "The Dark Noot",
                    "year": 2008,
                    "imageUrl": "https://m.media-amazon.com/images/I/61zBUhQj22L._AC_SY679_.jpg"
                }
            ],
        }
    ]

    return (
        <div id="listPage" className="containerWithBackground">
            <div className="flexRow justifyBetween alignCenter">
                <h1>Lists</h1>
                <button className="defaultButton bg-quaternary">Create List</button>
            </div>
            <hr />
            {
                lists.map(list =>
                    <div className="list">
                        {lists[0].attachedMovies.map((movie, index) =>
                            <img className="listPoster" src={movie.imageUrl} alt={movie.name + " Poster"} />
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