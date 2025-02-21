import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch"
import { LoadingMessage } from "../03-examples/LoadingMessage";
import { PokemonCard } from "../03-examples/PokemonCard";

export const Layout = () => {
    const {counter, increment, decrement} = useCounter(1);
    const {data, isLoading, hasError} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    return (
        <>
            <h1>MultipleCustomHooks</h1>
            <hr />
            <div className="row justify-content-md-center">
                <div className="col-md-auto">
                    {isLoading ? <LoadingMessage /> : <PokemonCard data={data} />}
                </div>
            </div>
            <div className="row justify-content-md-center text-center">
                <div className="col col-lg-2">
                    <button disabled={isLoading} type="button" className="btn btn-primary" onClick={() => decrement(1)}>anterior</button>
                </div>
                <div className="col-md-auto">
                    <p>{counter}</p>
                </div>
                <div className="col col-lg-2">
                    <button disabled={isLoading} type="button" className="btn btn-primary" onClick={() => increment(1)}>siguiente</button>
                </div>
            </div>
        </>
    )
}
