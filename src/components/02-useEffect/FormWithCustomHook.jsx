import { useForm } from "../../hooks/useForm"

export const FormWithCustomHook = () => {
    const {formState, onInputChange, onResetForm} = useForm({
        email: '',
        username: '',
        password: ''
    });
    const {email, username, password} = formState;

    return (
        <>
            <h1>Formulario con custom Hook</h1>
            <hr />
            <form>
                <div className="row mb-2">
                    <div className="col">
                        <input type="email" className="form-control" placeholder="e-mail" name="email" value={email} onChange={onInputChange} />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={onInputChange} />
                    </div>
                    <div className="col">
                        <input type="password" className="form-control" placeholder="Contraseña" name="password" value={password} onChange={onInputChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button className="btn btn-danger" onClick={onResetForm}>Reset</button>
                    </div>
                </div>
            </form>
        </>
    )
}
