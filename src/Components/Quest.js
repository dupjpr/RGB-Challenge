import React from 'react';

const Quest = ({mainColor}) => {

    const { r, g, b } = mainColor;
    return(
        <span>rgb( {r}, {g}, {b} )</span>
    )
};

export default Quest;