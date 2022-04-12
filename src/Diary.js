import React from "react";
import logs from "./tempData/logs";
import Header from './components/Header';

const Diary = () => {
    const logData = Object.entries(logs);
    const sortDiary = () => {
        
    }

    return (
        <>
            <Header />
            <div>
                <button className="diary-logbtn"><span>&#43;</span> <strong>Log Movie</strong></button>
            </div>
            <br />
            <br />
            <br />
            <div className="diary-navbar">
                <h3>My Diary</h3>
                <div className="diary-dropdown">
                <button className="diary-dropbtn" onClick={sortDiary()}>Dropdown
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="diary-dropdown-content" id="myDropdown">
                    <a href="#">Watch Date</a>
                    <a href="#">Your Rating</a>
                    <a href="#">Rewatch Count</a>
                </div>
                </div>
                <input type="text" placeholder="Search for movies"/> 
            </div>
            <div className="diary-content">
                <div className="month">
                    <div className="month-header">
                        <p>February 2022</p>
                    </div>
                    <div className="month-movies">
                        <div className="diary-entry">
                            <div className="day">
                                20
                            </div>
                            <div>
                                <img className = "poster" src="https://deadline.com/wp-content/uploads/2019/01/do-the-right-thing-us-poster-1989-universal-pictures-spike-lee-danny-aiello-file-reference-32509-129tha-pmadf7-e1547846486255.jpg"/>
                            </div>
                            <div className="title">
                                <em>Do The Right Thing</em> (1989)
                            </div>
                            <div>
                                <div className="clip-star-active"></div>
                                <div className="clip-star-active"></div>
                                <div className="clip-star-active"></div>
                                <div className="clip-star-active"></div>
                                <div className="clip-star-inactive"></div>
                            </div>
                            <div className="rewatch">
                                <i className="material-icons">replay</i>
                            </div>
                            <div className="review">
                                <i className="fa fa-align-left"></i>
                            </div>
                            <span className="fa-stack">
                                <i className='fas fa-pencil-alt fa-stack-2x'></i>
                                <i className="fa fa-trash-o fa-stack-1x"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>       
    );
}

export default Diary;