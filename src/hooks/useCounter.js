import { useState } from "react";

export const useCounter = (initialValue = 10) => {
    const [counter, setCounter] = useState(initialValue);
    const increment = (i = 1) => setCounter(counter+i);
    const decrement = (i = 1) => setCounter(counter-i);
    const reset = () => setCounter(initialValue);
    return {
        counter,
        increment,
        decrement,
        reset
    };
}
