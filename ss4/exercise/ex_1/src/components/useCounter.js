import { useState } from "react";

const useCounter = () => {
    const [count, setCount] = useState(0);

    const inscrease = (num) => {
        const newCount = count + num;
        setCount(newCount);
    }
    return [count, inscrease];   
}

export default useCounter;