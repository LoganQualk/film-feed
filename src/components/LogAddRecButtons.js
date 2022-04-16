import Button from 'react-bootstrap/Button';

const LogAddRecButtons = () => {
    return (
    <div className="flexCol">
        <div className="detailsButton">
            <Button>Log Movie to Diary</Button>
        </div>
        <div className="detailsButton">
            <Button>Add Movie to Movie List</Button>
        </div>
        <div className="detailsButton">
            <Button>Recommend to Friend</Button>
        </div>
    </div>);
};

export default LogAddRecButtons;