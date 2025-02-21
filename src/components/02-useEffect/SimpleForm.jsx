import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: '',
        email: ''
    });
    const {username, email} = formState;
    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        });
    };
    useEffect(() => {
        //console.log('carga inicial del componente');
    }, []);
    useEffect(() => {
        //console.log('ha cambiado el formulario');
    }, [formState]);
    useEffect(() => {
        //console.log('ha cambiado el email');
    }, [email]);
    return (
        <>
            <h1>Simple Form</h1>
            <hr />
            <form className="row">
                <input type="text" className="col form-control" placeholder="Username" name="username" value={username} onChange={onInputChange} />
                <input type="email" className="col form-control" placeholder="e-mail" name="email" value={email} onChange={onInputChange} />
                {
                    username === 'julis' && <Message />
                }
            </form>
        </>
    )
}
