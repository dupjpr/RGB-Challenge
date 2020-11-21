import React, { Fragment } from 'react';
import '../style/answer.css'
const Answer = () => {

    const color = () => {
        const colorNum = 255;
        const rgbColor = {};
        rgbColor.r = Math.floor(Math.random() * colorNum);
        rgbColor.g = Math.floor(Math.random() * colorNum);
        rgbColor.b = Math.floor(Math.random() * colorNum);
        
        return rgbColor;    
    
    }

    const colorSet = [];

    for (let i = 0; i < 3; i++){
        const item = color();
        colorSet.push(item);
    }

    const [uno, dos, tres] = colorSet;
 
    return(
        <Fragment>
            <div className="answer">
                <div className="answerOne" style={{backgroundColor: `rgb(${uno.r}, ${uno.g}, ${uno.b})` }}></div>
                <div className="answerTwo" style={{backgroundColor: `rgb(${dos.r}, ${dos.g}, ${dos.b})` }}></div>
                <div className="answerThree" style={{backgroundColor: `rgb(${tres.r}, ${tres.g}, ${tres.b})` }}></div>
            </div>
        </Fragment>

    )
}

export default Answer;