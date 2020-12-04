import React, {useState} from 'react';
import Score from './Score.js';
import Quest from './Quest.js';
import Answer from './Answer.js';
import '../style/section.css'

const Section = ({colorSet, rgbQuest}) => {
    
    // user answer

    const [answer,setAnswer] = useState('answer');
    
    // validation of answer

    const {id} = rgbQuest;
    const valid = answer === id ? true : false;

    return(
        <section className="section">
          
        <Score valid={valid}/>

        <Quest 
            rgbQuest={rgbQuest}
            
        />
        <Answer 
            colorSet={colorSet}
            answer={answer}
            setAnswer={setAnswer}
        />

        </section>
    );
};

export default Section;