import React from 'react';
import '../style/section.css'

const Section = ({children}) => {
    
    return(
        <section className="section">
            {children}
        </section>
    );
};

export default Section;