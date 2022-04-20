import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Button } from "react-bootstrap";
import { generateID } from "../tools/generateID";


const CreateListModal = () => {
    const { movieName, movieYr, movieUrl, setModalPage, setModalVisible, lists, setLists } = useContext(GlobalContext);
    const [listName, setListName] = useState(null);
    const [listDescription, setListDescription] = useState(null);

    const handleBack = () => {
        setModalPage("addToList");
    };

    const handleSubmit = () => {
        if (movieName !== null) {

            setLists([...lists, {
                "name": listName,
                "id": generateID(),
                "description": listDescription,
                "date": new Date(),
                "attachedMovies": [
                    {
                        "name": movieName,
                        "year": movieYr,
                        "imageUrl": movieUrl,
                        "log": null
                    },
                ],
            }]
            );
        } else {
            setLists([...lists, {
                "name": listName,
                "id": generateID(),
                "description": listDescription,
                "date": new Date(),
                "attachedMovies": [],
            }]
            );
        }

        console.log("NEW LIST ADDED: " + JSON.stringify(lists.find((listObj) => listObj.name === listName)));
        setModalVisible(false);
    };

    return (
        <div className="dark-purple-text modalPadding">
            <h1>Create New List {movieName !== null && <>for <strong><em className="dark-dark-purple-text">{movieName}</em></strong></>} </h1>
            <div className="flex justifyCenter">
                <textarea cols="80" rows="1" placeholder="Movie List Name" onChange={(e) => setListName(e.target.value)}></textarea>
            </div>
            <div className="flex justifyCenter movieDescriptionBox">
                <textarea cols="80" rows="4" placeholder="Movie List Description" onChange={(e) => setListDescription(e.target.value)}></textarea>
            </div>
            <div className="flex justifyBetween modalLogButton">
                <button className="backButton" onClick={handleBack}>←</button>
                <Button onClick={handleSubmit}>Create and Add</Button>
            </div>
        </div>
    );
}

export default CreateListModal;