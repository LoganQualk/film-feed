import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import ModalTest from "./ModalTest";
import LogMovieModal from "./components/LogMovieModal";
import AddToListModal from "./components/AddToListModal";

const Modal = () => {

    const { setModalVisible, setIsLoaded, modalPage, modalVisible } = useContext(GlobalContext);
    const closeModal = () => {
        setModalVisible(false);
        // setModalData(null);
        setIsLoaded(false);
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
                        <h1>ERROR: Page Not Found</h1>
                    }
                </div>
            </div>
        </div>
    );
}

export default Modal;