import React, { Fragment} from 'react';
import '../style/answer.css'
const Answer = ({colorSet,answer,setAnswer}) => {
    
    const [one,two,three] = colorSet;
    
    // console.log(one);
    // console.log(two);
    // console.log(three);
    
    const handleClick = (e) =>{

        if (e.target.classList[0] === "answerOne"){
            setAnswer('one');
        } else if (e.target.classList[0] === "answerTwo") {
            setAnswer('two');
        } else {
            setAnswer('three');
        }
    }

    return(
        <Fragment>
            <div className="answer">
                <div 
                    className="answerOne" 
                    style={{backgroundColor: `rgb(${one.r}, ${one.g}, ${one.b})` }}
                    onClick={handleClick}
                    >
                </div>
                <div 
                    className="answerTwo" 
                    style={{backgroundColor: `rgb(${two.r}, ${two.g}, ${two.b})` }}
                    onClick={handleClick}
                    >
                </div>
                <div 
                    className="answerThree" 
                    style={{backgroundColor: `rgb(${three.r}, ${three.g}, ${three.b})` }}
                    onClick={handleClick}
                    >
                </div>
                
            </div>
        </Fragment>

    )
}

export default Answer ;
