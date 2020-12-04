import React from 'react';

const Quest = ({rgbQuest}) => {
    
    const {r,g,b} = rgbQuest;

    // const [check, setCheck] = useState('nada');
    
    
    
    // valid ? setCheck(valid) : setCheck(false)
    // setCheck('pak');
    // const [check, setCheck] = useState('');

    // setCheck('pakman');
    
    // console.log(check);
    

    return(
        <span>rgb( {r} , {g} , {b} )</span>
    )
    
};

export default Quest;
