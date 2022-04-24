import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';

const AttachedModalItem = ({ id }) => {
    const { attachedModalItems, setAttachedModalItems } = useContext(GlobalContext);

    const handleDelete = () => {
        setAttachedModalItems(
            attachedModalItems.filter((item) => {
                if(item === id) {
                    return false;
                }
                return true;
            })
        );
    }

    return (
        <div className="attachedModalContainer">
            <div className="attachedtoModal">
                <span className="userCircleModal"><AccountCircleIcon /></span>
                {id}
                <span className="deleteButtonContainerModal">
                    <button className="deleteButton" onClick={handleDelete}><DeleteIcon /></button>
                </span>
            </div>
        </div>
    );
}

export default AttachedModalItem;