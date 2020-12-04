import React from 'react';

const MainColor = ({ mainColor }) => {
    
    const {r, g, b} = mainColor;

    // const [check, setCheck] = useState(false);
    
    
    
    // valid ? setCheck(valid) : setCheck(false)
    // setCheck('pak');
    // const [check, setCheck] = useState('');

    // setCheck('pakman');
    
    console.log({ mainColor });
    

    return <span>rgb( {r} , {g} , {b} )</span>;
    
};

export default MainColor;
