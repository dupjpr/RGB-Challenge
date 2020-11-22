import React, {Fragment} from 'react';
import Header from './Components/Header';
import Section from './Components/Section';
import Score from './Components/Score';
import Quest from './Components/Quest';
import Answer from './Components/Answer';
import './style/app.css';

function App() {

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

  const [one, two, three] = colorSet;

  const rgbQuestGenerate = () =>{
    
    return colorSet[Math.floor(Math.random() * colorSet.length)]
  }

  const rgbQuest = rgbQuestGenerate();
  const {r,g,b} = rgbQuest;

  return (
    <Fragment>
      <Header />
      <Section>
          <Score/>
          <Quest
            r = {r}
            g = {g}
            b = {b}
          />
          <Answer 
            firstColor = {one}
            secondColor = {two}
            thirdColor = {three}
          />
      </Section>
      
    </Fragment>
  );
}

export default App;
