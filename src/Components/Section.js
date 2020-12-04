import React from 'react';
import Score from './Score.js';
import MainColor from './MainColor.js';
import OptionColors from './OptionColors.js';
import '../style/section.css'
import Counter from '../contexts/counter.context.js';

const Section = ({colorSet, mainColor, states}) => {
  const [counter] = states;    
  return(
    <Counter.Provider >
      <section className="section">
      
      <Score counter={counter} />
      
      <MainColor mainColor={mainColor} />
      <OptionColors 
        colorSet={colorSet}
        trueColor={mainColor}
        states={states}
      />
      
      </section>
    </Counter.Provider>
  );
};

export default Section;