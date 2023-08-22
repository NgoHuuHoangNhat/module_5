import React from 'react';
import useCounter from './useCounter';

const FirstCounter = () => {
    const [count, setCount] = useCounter();
    
    return (
        <>
            <div style={{marginTop: "50px"}}>
                <label>Count: {count} </label><br></br>
                <button onClick={() => setCount(1)}>Add 1</button>
            </div>
        </>
    )
}

export default FirstCounter;