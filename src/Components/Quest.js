import React from 'react';

const Quest = () => {

    const rgbColor = {};

    const color = () => {
        const colorNum = 255;
        rgbColor.r = Math.floor(Math.random() * colorNum);
        rgbColor.g = Math.floor(Math.random() * colorNum);
        rgbColor.b = Math.floor(Math.random() * colorNum);
    }
    color();
    console.log(rgbColor)
   
    

    return(
        <span>rgb( {rgbColor.r},{rgbColor.g},{rgbColor.b} )</span>
    )
};

export default Quest;
