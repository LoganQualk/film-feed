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
                </React.Fragment>
            )}
        </div>
    );
}

export default Diary;