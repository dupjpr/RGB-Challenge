import React, { Fragment } from 'react';
import '../style/answer.css'
const Answer = () => {
   
    const color = () => {
        
        const rgbColor = {};
        
        const random = () => {
            const colorNum = 255;
            return Math.floor(Math.random() * colorNum);
        }

        rgbColor.r = random();
        rgbColor.g = random();
        rgbColor.b = random();
    
        return rgbColor;    

    }

    const colorSet = [];

    for (let i = 0; i < 3; i++){
        const id = ['one', 'two', 'three'];
        const item = color();
        item.id = id[i];
        colorSet.push(item);
    }

    const [one, two, three] = colorSet;

    
    const validation = (e) =>{
        
        console.log('leyendo')
    }





    return(
        <Fragment>
            <div className="answer">
                <div 
                    className="answerOne" 
                    style={{backgroundColor: `rgb(${one.r}, ${one.g}, ${one.b})` }}
                    onClick={validation}
                    >
                </div>
                <div 
                    className="answerTwo" 
                    // style={{backgroundColor: `rgb(${secondR}, ${secondG}, ${secondB})` }}
                    // onClick={validation}
                    >
                </div>
                <div 
                    className="answerThree" 
                    // style={{backgroundColor: `rgb(${thirdR}, ${thirdG}, ${thirdB})` }}
                    // onClick={validation}
                    >
                </div>
            </div>
        </Fragment>

    )
}

export default Answer;