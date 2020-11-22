import React, { Fragment } from 'react';
import '../style/answer.css'
const Answer = ({firstColor, secondColor, thirdColor}) => {

    const {r: firstR, g: firstG, b: firstB} = firstColor;
    const {r: secondR, g: secondG, b: secondB} = secondColor;
    const {r: thirdR, g: thirdG, b: thirdB} = thirdColor;

    // console.log('those are the colors answer');
    // console.log(firstColor);
    // console.log(secondColor);
    // console.log(thirdColor);
    
   
 
    return(
        <Fragment>
            <div className="answer">
                <div className="answerOne" style={{backgroundColor: `rgb(${firstR}, ${firstG}, ${firstB})` }}></div>
                <div className="answerTwo" style={{backgroundColor: `rgb(${secondR}, ${secondG}, ${secondB})` }}></div>
                <div className="answerThree" style={{backgroundColor: `rgb(${thirdR}, ${thirdG}, ${thirdB})` }}></div>
            </div>
        </Fragment>

    )
}

export default Answer;