import React from "react";
import { useContext, useState } from "react";
import logs from "./tempData/logs";
import Header from './components/Header';
import LogMovieModal from './components/LogMovieModal'

const Diary = () => {
    const logData = Object.entries(logs);
    const months = []; // track the months already in diary
    for(let i = 0; i < logData.length; i++){
        if(!months.includes(logData[i][1].date.getMonth())){
            months.push(logData[i][1].date.getMonth());
        }
    }

    const sortDiary = () => {
    }
    const logMovie = () =>{
    }

    const render = () =>{
        let entry = ``
    let month = document.getElementById("month");
        
    for (var i in logData){
        let log = logData[i][1];
        let stars = " ";
        for(let i = 1; i <= log.rating; i++){
            stars.concat(' ', '<div className="clip-star-active"></div>');
        }
        if(log.rating < 5){
            for(let i = 1; i <= 5-log.rating; i++){
                stars.concat(' ', '<div className="clip-star-inactive"></div>');
            }
        }
        
        let hasReview = ``;
        if(log.text != null){
            hasReview = `<i class="fa fa-align-left"></i>`;
        }
        
        entry = `<div class="diary-entry">
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
                        <span class="fa-stack">
                            <i class='fas fa-pencil-alt fa-stack-2x'></i>
                            <i class="fa fa-trash-o fa-stack-1x"></i>
                        </span>
                    </div>`;
        if(entry != null){
            month.innerHTML += entry;
        }                    
    }
    }

    return (
        <>
            <Header />
            <div>
                <button className="diary-logbtn" onClick={() => <LogMovieModal />}><span>&#43;</span> <strong>Log Movie</strong></button>
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
            <div className="diary-content">
                <div>
                    <div className="month-header">
                        <p>February 2022</p>
                    </div>
                    <div id="month" className="month-movies" onLoad={() => render()}>
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
                            <span>
                                <i className='fas fa-pencil-alt'></i>
                                <i className="fa fa-trash-o"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>       
    );
}

export default Diary;