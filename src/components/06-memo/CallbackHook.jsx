import { useCallback, useState } from "react";
import { IncrementButton } from "./IncrementButton";

export const CallbackHook = () => {
    const [counter, setCounter] = useState(0);
    //const increment = () => {
    //    setCounter(counter + 1);
    //};
    const increment = useCallback(
        (i) => setCounter((value) => value + i)
        ,[]);
    return (
        <>
            <h1>Contador: <small>{counter}</small></h1>
            <hr />
            <IncrementButton increment={increment} />
        </>
    )
}
