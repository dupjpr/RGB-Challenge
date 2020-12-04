import React, { Fragment} from 'react';
import '../style/optionColors.css'
const OptionColors = ({colorSet, trueColor, states}) => {
    
    const {color1, color2, color3} = colorSet;
    const [counter, setCounter] = states
    
    const handleClick = (e, color) => {
        const selectedColor = [...Object.values(color)]
        const incomingColor = [...Object.values(trueColor)]
        
        const similarValues = selectedColor.filter((val, idx) => val === incomingColor[idx])
        let tempCounter = counter + 1

        similarValues.length === 3 ? setCounter(tempCounter) : console.log('wrong color');

    }

    return(
        <Fragment>
            <div className="OptionColors">
                <div 
                    className="OptionColorsOne" 
                    style={{backgroundColor: `rgb(${color1.r}, ${color1.g}, ${color1.b})` }}
                    onClick={(e) => handleClick(e, color1)}
                    >
                </div>
                <div 
                    className="OptionColorsTwo" 
                    style={{backgroundColor: `rgb(${color2.r}, ${color2.g}, ${color2.b})` }}
                    onClick={(e) => handleClick(e, color2)}
                    >
                </div>
                <div 
                    className="OptionColorsThree" 
                    style={{backgroundColor: `rgb(${color3.r}, ${color3.g}, ${color3.b})` }}
                    onClick={(e) => handleClick(e, color3)}
                    >
                </div>
                
            </div>
        </Fragment>

    )
}

export default OptionColors ;
