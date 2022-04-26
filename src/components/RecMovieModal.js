import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Button } from "react-bootstrap";
import SearchIcon from '@mui/icons-material/Search';
import friends from "../tempData/friends";
import AttachedModalItem from "./AttachedModalItem";


const RecMovieModal = () => {
    const { movieName, setModalVisible, attachedModalItems, setAttachedModalItems } = useContext(GlobalContext);
    const [userResults, setUserResults] = useState([]);

    const handleChange = (input) => {
        if(input.length === 0) {
            setUserResults([]);
        } else {
            setUserResults(
                friends.filter((friendObj) => {
                    if(friendObj.name.includes(input) || friendObj.username.includes(input)) {
                        if(!attachedModalItems.includes(friendObj.username)) {
                            return true;
                        }
                    }
                    return false;
                })
            );
        }
        
    };
    
    const handlePicked = (input) => {
        document.getElementById("userRecSearch").value = '';
    
        setAttachedModalItems([...attachedModalItems, input]);
        setUserResults([]);
    };

    const handleSubmit = () => {
        setModalVisible(false);
    };

    return ( 
        <div className="dark-purple-text modalPadding">
            <h1>Recommend <strong><em className="dark-dark-purple-text">{movieName}</em></strong> to...</h1>
            <div className="flex flexCol">
                <div className="flexRow justifyCenter">
                    <input className="userSearch" id="userRecSearch" onChange={(e) => handleChange(e.target.value)} placeholder="Search for a user..."/>
                    <button className="userSearchButton"><SearchIcon /></button>
                </div>
                <div className="userRecResults flexCol">
                    {userResults.map((userObj) => 
                        (<button key={userObj.username} 
                            id={userObj.username} 
                            className='autocomplete-items'
                            onClick={() => handlePicked(userObj.username)}>
                            @{userObj.username} <em className="userSearchResultName">{userObj.name}</em>
                        </button>)
                    )}
                </div>
            </div>

            <div className="flex flexCol alignCenter">
                {attachedModalItems.map((item) => <AttachedModalItem key={item} id={item}/>)}
            </div>
            <div className="flex justifyEnd modalLogButton">
                <Button onClick={handleSubmit}>Recommend</Button>
            </div>
        </div>
     );
}
 
export default RecMovieModal;