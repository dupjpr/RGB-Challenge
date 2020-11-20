import React, {Fragment} from 'react';
import Header from './Components/Header';
import Section from './Components/Section';
import Score from './Components/Score';
import Quest from './Components/Quest';
import Answer from './Components/Answer';

function App() {
  return (
    <Fragment>
      <Header />
      <Section>
         <Score/>
         <Quest/>
         <div className="contenedor">
         <Answer/>
         <Answer/>
         <Answer/>

         </div>
      </Section>
      
    </Fragment>

   

  );
}

export default App;
