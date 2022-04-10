import React from "react";
import logs from "./tempData/logs";

const Diary = () => {
    const logData = Object.entries(logs);

    return (
        <div>
            <h1>Diary</h1>
            {logData.sort((logA, logB) => logB[1].date - logA[1].date).map(log =>
                <React.Fragment>
                    <div className="bg-tertiary">
                        <h2>{log[1].title}</h2>
                        <p>{log[1].text}</p>
                        <p>Logged on {log[1].date.toLocaleDateString()}</p>
                    </div>
                    <br />
                    <div>
                        <button class="logbtn"><span>&#43;</span> <strong>Log Movie</strong></button>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div class="navbar">
                        <h3>My Diary</h3>
                        <div class="dropdown">
                        <button class="dropbtn" onclick="myFunction()">Dropdown
                            <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content" id="myDropdown">
                            <a href="#">Watch Date</a>
                            <a href="#">Your Rating</a>
                            <a href="#">Rewatch Count</a>
                        </div>
                        </div>
                        <input type="text" placeholder="Search for movies"/> 
                    </div>
                    <div class="diary-content">
                        <div class="month">
                            <div class="month-header">
                                <p>February 2022</p>
                            </div>
                            <div class="month-movies">
                                <div class="diary-entry">
                                    <div class="day">
                                        20
                                    </div>
                                    <div class="poster">
                                        <img class = "poster" src="https://deadline.com/wp-content/uploads/2019/01/do-the-right-thing-us-poster-1989-universal-pictures-spike-lee-danny-aiello-file-reference-32509-129tha-pmadf7-e1547846486255.jpg"/>
                                    </div>
                                    <div class="title">
                                        <em>{log[1].title}</em> (year)
                                    </div>
                                    <div class="stars" style="--rating: 4;" aria-label="Rating of this product is 4 out of 5."></div>
                                    <div class="rewatch">
                                        <i class="material-icons" style="font-size:36px">replay</i>
                                    </div>
                                    <div class="review">
                                        <i class="fa fa-align-left" style="font-size:36px;"></i>
                                    </div>
                                    <span class="fa-stack" style="vertical-align: top;">
                                        <i class='fas fa-pencil-alt fa-stack-2x' style='font-size:36px'></i>
                                        <i class="fa fa-trash-o fa-stack-1x" style="font-size:36px"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )}
        </div>        
    );
}

export default Diary;