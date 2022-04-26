import React from "react";
import { useContext } from "react";
import Header from './components/Header';
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

    const {logs, setModalPage, setModalVisible, setAttachMovieLocation} = useContext(GlobalContext);
    
    const logData = Object.entries(logs);
    
    const months = [{"February2022":{"MonthYear": "February 2022",
                        "Month": 1,
                    "Year": 2022}}]; // track the months already in diary
    const monthYears = ["February 2022"];
    
    const updateMonths = () => {
        for(let i = 0; i < logData.length; i++){
            let month = monthDict[new Date(logData[i][1].date).getMonth()];
            let monthYear = month + " " + new Date(logData[i][1].date).getFullYear()

            if(!monthYears.includes(monthYear)){
                monthYears.push(monthYear);
                months.push({mothYear: {"MonthYear": monthYear,
                    "Month": new Date(logData[i][1].date).getMonth(),
                    "Year": new Date(logData[i][1].date).getFullYear()}});

                let monthDiv = document.createElement("div");
                monthDiv.innerHTML = `<div id="` + month + `" class="month-header">
                                        <p>` + monthYear + `</p>
                                    </div>
                                    <div id="` + month + new Date(logData[i][1].date).getFullYear() + `" class="month-movies">
                                    </div>`;
                
                let diaryContent = document.getElementById("diaryContent");
                diaryContent.prepend(monthDiv);
            }
        }
        
        for (var i in logData){
            //let entry = ``
            let log = logData[i][1];
            let monthYear = monthDict[new Date(log.date).getMonth()] + new Date(log.date).getFullYear()
            let month = document.getElementById(monthYear);
            let stars = ``;
            
            for(let i = 1; i <= log.rating; i++){
                stars += `<i class="fa fa-star" style="font-size:36px;color:gold"></i>`;
            }
            
            if(log.rating < 5){
                for(let i = 1; i <= 5-log.rating; i++){
                    stars += `<i class="fa fa-star" style="font-size:36px;color:grey"></i>`;
                }
                if(5 - log.rating < 1){
                    stars += `<i class="fa fa-star-half-full" style="font-size:36px;color:gold"></i>`
                }
            }
            
            let hasReview = ``;
            if(log.text != null){
                hasReview = `<i class="fa fa-align-left"></i>`;
            }
            let entry = document.createElement("div");
            entry.innerHTML = `<div id = "` + logData[i][0] + `" class="diary-entry">
                            <div class="day">
                            ` + new Date(log.date).getDate() + `
                            </div>
                            <div>
                                <img class = "poster" src="` + log.imageUrl + `"/>
                            </div>
                            <div class="title">
                                <em>` + log.title + `</em> (` + log.year + `)
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
                                <button onclick={deleted.push(this.parentNode.parentNode.id)}><i class="fa fa-trash-o"></i></button>
                            </div>
                        </div>`;
            if(entry != null && month != null){
                month.append(entry);
            }                    
        }
    }

    const deleteEntry = (id) =>{
        console.log(id);
        //document.getElementById(id).remove();
    };

    const sortDiary = () => {
    };

    return (
        <>
            <Header />
            <div>
                <button className="diary-logbtn" onClick={() => {
                    setModalPage("attachMovie");
                    setModalVisible(true);
                    setAttachMovieLocation("addToDiary");
                }}><span>&#43;</span> <strong>Log Movie</strong></button>
            </div>
            <br />
            <br />
            <br />
            <div className="diary-navbar">
                <h3>My Diary</h3>
                <div className="diary-dropdown">
                <button className="diary-dropbtn">Sort By
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="diary-dropdown-content" id="myDropdown">
                    <p onClick={sortDiary()}>Watch Date</p>
                    <p href="#" onClick={sortDiary()}>Your Rating</p>
                    <p href="#" onClick={sortDiary()}>Rewatch Count</p>
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
                                <img className = "poster" src="https://deadline.com/wp-content/uploads/2019/01/do-the-right-thing-us-poster-1989-universal-pictures-spike-lee-danny-aiello-file-reference-32509-129tha-pmadf7-e1547846486255.jpg" alt="Poster"/>
                            </div>
                            <div className="title">
                                <em>Do The Right Thing</em> (1989)
                            </div>
                            <div className="rewatch">
                                <i className="material-icons">replay</i>
                            </div>
                            <div className="review">
                                <i className="fa fa-align-left"></i>
                            </div>
                            <div>
                                <i className='fas fa-pencil-alt'></i>
                                <button onClick={() => deleteEntry(this.id)}><i className="fa fa-trash-o"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>       
    );
}

export default Diary;