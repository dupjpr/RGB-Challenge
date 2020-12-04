import React from 'react';


const Score = ({valid}) =>{
    let score = 0;
    
    valid ? score =+ 1: score=-1;



    return(
    <p>Score: {score}</p>
    );

}

export default Score;