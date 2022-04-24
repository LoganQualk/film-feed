import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';

const AttachedModalItem = ({ id }) => {
    return (
        <div className="attachedModalContainer">
            <div className="attachedtoModal">
                <span className="userCircleModal"><AccountCircleIcon /></span>
                {id}
                <span className="deleteButtonContainerModal">
                    <button className="deleteButton"><DeleteIcon /></button>
                </span>
            </div>
        </div>
    );
}

export default AttachedModalItem;