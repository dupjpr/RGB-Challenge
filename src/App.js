import React, {Fragment, useState} from 'react';
import Header from './Components/Header';
import Section from './Components/Section';

import './style/app.css';

function App() {

 
  // generación de colores asnwers
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

  const colorSet = {
    color1: color(),
    color2: color(),
    color3: color()
  };

  // se genera el color de la pregunta

  const mainColorGenerator = () =>{
    const colorSelected = Object.values(colorSet); 
    return colorSelected[Math.floor(Math.random() * colorSelected.length)]
  }
  
  const mainColor = mainColorGenerator();

  // Score and play egain

  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState('');
  console.log(message)

  return (
    <Fragment>
      <Header />
      <Section 
        mainColor={mainColor} 
        colorSet = {colorSet}
        state = {[counter, setCounter]}
        stateM = {[message, setMessage]}
      />     
    </Fragment>
  );
}

export default App;
