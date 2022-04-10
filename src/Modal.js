import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";

const Modal = () => {

    const state = useContext(GlobalContext);
    const closeModal = () => {
        state.setModalVisible(false);
        state.setModalData(null);
        state.setIsLoaded(false);
    }
    const modalStyle = {
        display: state.modalVisible ? "block" : "none"
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
                        (state.modalPage === "test" &&
                        <ModalTest></ModalTest>) ||
                        <h1>ERROR: Page Not Found</h1>
                    }
                </div>
            </div>
        </div>
    );
}

export default Modal;