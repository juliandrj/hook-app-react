import { useRef } from "react"

export const FocusScreen = () => {
    const inputRef = useRef();
    const onClick = () => {
        inputRef.current.select();
    };
    return (
        <>
            <h1>Focus Screen</h1>
            <hr />
            <form>
                <div className="row">
                    <div className="col-8">
                        <input ref={inputRef} type="text" className="form-control" placeholder="Digite su nombre" />
                    </div>
                    <div className="col-4">
                        <button type="button" className="btn btn-primary" onClick={onClick}>focus</button>
                    </div>
                </div>
            </form>
        </>
    )
}
