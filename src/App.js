import React, {Fragment} from 'react';
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

  const colorSet = [];
  
  for (let i = 0; i < 3; i++){
      const id = ['one', 'two', 'three'];
      const item = color();
      item.id = id[i];
      colorSet.push(item);
    }

  // se genera el color de la pregunta

  const rgbQuestGenerate = () =>{
    return colorSet[Math.floor(Math.random() * colorSet.length)]
  }

  const rgbQuest = rgbQuestGenerate();

  return (
    <Fragment>
      <Header />
      <Section 
        rgbQuest={rgbQuest} 
        colorSet = {colorSet}
      />     
    </Fragment>
  );
}

export default App;
