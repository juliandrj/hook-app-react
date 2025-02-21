import { useMemo, useState } from "react";
import { useCounter } from "../../hooks/useCounter"

const heavyStuff = (iterations) => {
    for (let i = 0; i < iterations; i++) {
        console.log(':)');
    }
    return `Se han realizado ${iterations} iteraciones...`;
}

export const MemoHook = () => {
    const {counter, increment} = useCounter(100);
    const [flag, setFlag] = useState(true);
    //Solo se ejecuta la función cuando cambia counter.
    const iterations = useMemo(() => heavyStuff(counter), [counter]);
    return (
        <>
            <h1>Contador: <small>{counter}</small></h1>
            <hr />
            <h2>{iterations}</h2>
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
