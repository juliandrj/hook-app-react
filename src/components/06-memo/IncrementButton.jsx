import { memo } from "react";

export const IncrementButton = memo(({increment}) => {
    console.log('Dibujando IncrementButton...');
    return (
        <button className="btn btn-primary" onClick={() => increment(5)}>+1</button>
    )
})
