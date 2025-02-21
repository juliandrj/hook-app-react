import { useState } from "react";
import { useCounter } from "../../hooks/useCounter"
import { Small } from "./Small";

export const Memorize = () => {
    const {counter, increment} = useCounter(0);
    const [flag, setFlag] = useState(true);
    return (
        <>
            <h1>Contador: <Small value={counter}/></h1>
            <hr />
            <div className="row justify-content-md-center">
                <div className="col col-lg-2">
                    <button className="btn btn-primary" onClick={() => increment()}>+1</button>
                </div>
                <div className="col col-lg-2">
                    <button className="btn btn-primary" onClick={() => setFlag(!flag)}>{flag ? 'ON' : 'OFF'}</button>
                </div>
            </div>
        </>
    )
}
