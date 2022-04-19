import React from "react";
import { useContext, useState } from "react";
import logs from "./tempData/logs";
import Header from './components/Header';
import LogMovieModal from './components/LogMovieModal'
import { GlobalContext } from "./context/GlobalContext";

const monthDict = {0:'January',
                    1: 'February',
                    2: 'March',
                    3: 'April',
                    4: 'May',
                    5: 'June',
                    6: 'July',
                    7: 'August',
                    8: 'September',
                    9: 'October',
                    10: 'November',
                    11: 'December'};

const Diary = () => {
    const logData = Object.entries(logs);
    const months = [1]; // track the months already in diary
    const updateMonths = () => {
        for(let i = 0; i < logData.length; i++){
            if(!months.includes(logData[i][1].date.getMonth())){
                months.push(logData[i][1].date.getMonth());
                let month = monthDict[logData[i][1].date.getMonth()];
                let monthYear = month + " " + logData[i][1].date.getFullYear()
                let monthDiv = document.createElement("div")
                monthDiv.innerHTML = `<div id="` + month + `" class="month-header">
                                        <p>` + monthYear + `</p>
                                    </div>
                                    <div id="` + month + logData[i][1].date.getFullYear() + `" class="month-movies">
                                    </div>`;
                
                let diaryContent = document.getElementById("diaryContent");
                diaryContent.prepend(monthDiv);
            }
        }
        for (var i in logData){
            let entry = ``
            let log = logData[i][1];
            let monthYear = monthDict[log.date.getMonth()] + log.date.getFullYear()
            let month = document.getElementById(monthYear);
            let stars = ``;
            
            for(let i = 1; i <= log.rating; i++){
                stars += `<div class="clip-star-active"></div>`;
            }
            
            if(log.rating < 5){
                for(let i = 1; i <= 5-log.rating; i++){
                    stars += `<div class="clip-star-inactive"></div>`;
                }
            }
            
            let hasReview = ``;
            if(log.text != null){
                hasReview = `<i class="fa fa-align-left"></i>`;
            }
            
            entry = `<div id = "` + logData[i][0] + `" class="diary-entry">
                            <div class="day">
                            ` + log.date.getDate() + `
                            </div>
                            <div>
                                <img class = "poster" src="`+ log.imageUrl +`"/>
                            </div>
                            <div class="title">
                                <em>` + log.title + `</em> `+ log.year +`
                            </div>
                            <div id="stars">
                                ` + stars + `
                            </div>
                            <div class="rewatch">
                                <i class="material-icons">replay</i>
                            </div>
                            <div class="review">
                                ` + hasReview + `
                            </div>
                            <div>
                                <i class='fas fa-pencil-alt fa-stack-2x'></i>
                                <button onclick="deleteEntry()"><i class="fa fa-trash-o"></i></button>
                            </div>
                        </div>`;
            if(entry != null && month != null){
                month.innerHTML += entry;
            }                    
        }
    }
    

    const sortDiary = () => {
    };
    const logMovie = () =>{
    };
    const deleteEntry = () =>{
        console.log("COOCH");
        //document.getElementById(id).remove();
    };

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
                <button className="diary-dropbtn">Dropdown
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="diary-dropdown-content" id="myDropdown">
                    <a href="#" onClick={sortDiary()}>Watch Date</a>
                    <a href="#" onClick={sortDiary()}>Your Rating</a>
                    <a href="#" onClick={sortDiary()}>Rewatch Count</a>
                </div>
                </div>
                <input type="text" placeholder="Search for movies"/> 
            </div>
            <div id="diaryContent" className="diary-content" onLoad={() => updateMonths()}>
                <div>
                    <div className="month-header">
                        <p>February 2022</p>
                    </div>
                    <div id="February2022" className="month-movies">
                        <div id="1" className="diary-entry">
                            <div className="day">
                                20
                            </div>
                            <div>
                                <img className = "poster" src="https://deadline.com/wp-content/uploads/2019/01/do-the-right-thing-us-poster-1989-universal-pictures-spike-lee-danny-aiello-file-reference-32509-129tha-pmadf7-e1547846486255.jpg"/>
                            </div>
                            <div className="title">
                                <em>Do The Right Thing</em> (1989)
                            </div>
                            <div id="stars">
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
                            <div>
                                <i className='fas fa-pencil-alt'></i>
                                <button onClick={() => deleteEntry()}><i className="fa fa-trash-o"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>       
    );
}

export default Diary;