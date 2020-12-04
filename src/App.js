import React, {Fragment, useState} from 'react';
import Header from './Components/Header';
import Section from './Components/Section';

import './style/app.css';

function App() {
  const [counter, setCounter] = useState(0)
  console.log('Rendering Section' , counter)


 
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
    const selected = Object.values(colorSet)
    return selected[Math.floor(Math.random() * selected.length)]
  }

  const mainColor = mainColorGenerator();

  return (
    <Fragment>
      <Header />
      { colorSet && mainColor && (
        <Section 
          mainColor={mainColor} 
          colorSet = {colorSet}
          states={[counter, setCounter]}
        />       
      )

      }
    </Fragment>
  );
}

export default App;
