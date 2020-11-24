import React, {Fragment} from 'react';
import Header from './Components/Header';
import Section from './Components/Section';
import Score from './Components/Score';
import Quest from './Components/Quest';
import Answer from './Components/Answer';
import './style/app.css';

function App() {

   return (
    <Fragment>
      <Header />
      <Section>
          <Score/>
          <Quest
           
          />
          <Answer 
            
           
          />
      </Section>
      
    </Fragment>
  );
}

export default App;
