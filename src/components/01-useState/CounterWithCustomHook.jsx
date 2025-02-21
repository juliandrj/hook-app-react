import { useCounter } from "../../hooks/useCounter"

export const CounterWithCustomHook = () => {
    const {counter, increment, decrement, reset} = useCounter();
    const m = 2;
    return (
        <>
            <h1>Counter: {counter}</h1>
            <hr />
            <button className="btn btn-primary" onClick={() => increment(m)}>+{m}</button>
            <button className="btn btn-primary" onClick={reset}>Reset</button>
            <button className="btn btn-primary" onClick={() => decrement(m)}>-{m}</button>
        </>
    )
}
