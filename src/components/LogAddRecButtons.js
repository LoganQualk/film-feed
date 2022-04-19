import { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import { GlobalContext } from "../context/GlobalContext";

const LogAddRecButtons = () => {
    const { setModalVisible, setModalPage } = useContext(GlobalContext);

    function handleLog () {
        setModalPage("logMovie");
        setModalVisible(true);
    }

    function handleAdd() {
        setModalPage("addToList");
        setModalVisible(true);
    }

    return (
    <div className="flexCol">
        <div className="detailsButton">
            <Button onClick={handleLog}>Log Movie to Diary</Button>
        </div>
        <div className="detailsButton">
            <Button onClick={handleAdd}>Add Movie to Movie List</Button>
        </div>
        <div className="detailsButton">
            <Button>Recommend to Friend</Button>
        </div>
    </div>);
};

export default LogAddRecButtons;