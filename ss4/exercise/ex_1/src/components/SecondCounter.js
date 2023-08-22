import React from "react";
import useCounter from "./useCounter";

const SecondCounter = () => {
    const [count, setCount] = useCounter();

    return (
        <>
            <div style={{marginTop: "50px"}}>
                <label>Count: {count}</label><br></br>
                <button onClick={() => setCount(2)}>Add 2</button>
            </div>
        </>
    )
}

export default SecondCounter;