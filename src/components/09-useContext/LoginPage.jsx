import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {
    const {setUser} = useContext(UserContext);
    return (
        <>
            <h1>LoginPage</h1>
            <hr />
            <button className="btn btn-primary" onClick={() => setUser({id: 123, name: 'Julian Rojas', email: 'jdrj@me.com'})}>+</button>
        </>
    )
}
