import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Button } from "react-bootstrap";


const AddToListModal = () => {
    const { movieName, movieYr, movieUrl, setModalVisible, setModalPage, lists } = useContext(GlobalContext);

    const [listPicked, setListPicked] = useState(null);

    const handleSubmit = (input) => {
        if(listPicked !== "createList") {
            lists.find((listObj) => listObj.name === listPicked)["attachedMovies"]
                 .push({
                    "name": movieName,
                    "year": movieYr,
                    "imageUrl": movieUrl,
                    "log": null,
                 });

            console.log('NEW LIST: ' + JSON.stringify(lists.find((listObj) => listObj.name === listPicked)["attachedMovies"]));     
            setModalVisible(false);
            
        } else {
            setModalPage("createList");
        }
    };

    return ( 
        <div className="dark-purple-text modalPadding">
            <h1>Add <strong><em className="dark-dark-purple-text">{movieName}</em></strong> to...</h1>
            <div className="flex flexCol clickableLists">
                {lists.map((listObj) => {
                    return (<button className="clickableList" key={listObj.name} onClick={() => setListPicked(listObj.name)}>{listObj.name}</button>);
                })}
                <button className="clickableList" key="createList" onClick={() => setListPicked("createList")}>+ Create New List</button>
            </div>
            <div className="flex justifyEnd modalLogButton">
                <Button onClick={handleSubmit}>Add</Button>
            </div>
        </div>
     );
}
 
export default AddToListModal;