import React, { Fragment } from 'react';
import '../style/answer.css'
const Answer = ({ colorSet, trueColor, state, stateM }) => {
    
    const [counter, setCounter] = state;
    const [message, setMessage] = stateM;
    const { color1, color2, color3 } = colorSet;
    
    const handleClick = ( e, color) =>{

        const setColor = Object.values(color);
        const setTrue = Object.values(trueColor);
        const similar = setColor.filter((val, index) => val === setTrue[index]);

        similar.length === 3 ? setCounter(counter + 5) : setCounter(counter - 1);
        
        similar.length === 3 ? setMessage('Correct plus 5 points!') : setMessage('Wrong less 1 point!');
    }
    
    
    return(
        <Fragment>
            <div className="answer">
                <div 
                    className="answerOne" 
                    style={{backgroundColor: `rgb( ${color1.r}, ${color1.g}, ${color1.b} )` }}
                    onClick={(e) => handleClick (e, color1)}
                    >
                </div>
                <div 
                    className="answerTwo" 
                    style={{backgroundColor: `rgb(${color2.r}, ${color2.g}, ${color2.b})` }}
                    onClick={(e) => handleClick (e, color2)}
                    >
                </div>
                <div 
                    className="answerThree" 
                    style={{backgroundColor: `rgb(${color3.r}, ${color3.g}, ${color3.b})` }}
                    onClick={(e) => handleClick (e, color3)}
                    >
                </div>
                
            </div>
        </Fragment>

    )
}

export default Answer ;
