import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import ModalTest from "./ModalTest";
import LogMovieModal from "./components/LogMovieModal";
import AddToListModal from "./components/AddToListModal";
import CreateListModal from "./components/CreateListModal";
import AttachMovieModal from "./components/AttachMovieModal";
import RecMovieModal from "./components/RecMovieModal";

const Modal = () => {

    const { setModalVisible, setIsLoaded, modalPage, modalVisible, setAttachedModalItems } = useContext(GlobalContext);
    const closeModal = () => {
        setModalVisible(false);
        // setModalData(null);
        setIsLoaded(false);
        setAttachedModalItems([]);
        document.getElementById("userRecSearch").value = '';
    }
    const modalStyle = {
        display: modalVisible ? "block" : "none"
    }

    return (
        <div>
            <div className="modal" style={modalStyle} onClick={(event) => {
                if (!event.target.closest(".modal-content")) {
                    closeModal();
                }
            }}>
                <div className="modal-content">
                    <span className="close" onClick={() => closeModal()}>&times;</span>
                    {
                        (modalPage === "test" && <ModalTest></ModalTest>) ||
                        (modalPage === "logMovie" && <LogMovieModal></LogMovieModal>) || 
                        (modalPage === "addToList" && <AddToListModal></AddToListModal>) || 
                        (modalPage === "createList" && <CreateListModal></CreateListModal>) || 
                        (modalPage === "attachMovie" && <AttachMovieModal></AttachMovieModal>) ||
                        (modalPage ==="recMovie" && <RecMovieModal></RecMovieModal>) || 
                        <h1>ERROR: Page Not Found</h1>
                    }
                </div>
            </div>
        </div>
    );
}

export default Modal;