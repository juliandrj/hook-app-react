import { useLayoutEffect, useRef } from "react"

export const PokemonCard = ({data}) => {
    const h5Ref = useRef();
    useLayoutEffect(() => {
        const {height, width} = h5Ref.current.getBoundingClientRect();
        console.log(height, width);
    }, [data.name]);
    return (
        <div className="card">
            <img src={data['sprites']['other']['official-artwork']['front_default']} className="card-img-top" alt={data.name} />
            <div className="card-body">
                <h5 ref={h5Ref} className="card-title">{data.name}</h5>
            </div>
        </div>
    )
}
