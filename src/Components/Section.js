import React, {useState} from 'react';
import Score from './Score.js';
import Quest from './Quest.js';
import Answer from './Answer.js';
import '../style/section.css'
import Message from './Message.jsx';

const Section = ({ colorSet, mainColor, state, stateM }) => {
    
    const [counter] = state;
    const [message] = stateM;

  

    return(
        <section className="section">
          
            <Score counter={counter}/>

            <Quest mainColor={mainColor} />

            <Message message={message}/>

            <Answer 
                colorSet={colorSet}
                trueColor={mainColor}
                state={state}
                stateM={stateM}
            />

        </section>
    );
};

export default Section;