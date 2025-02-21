import { useForm } from "../../hooks/useForm";

export const AddTodo = ({addNewTodo}) => {
    const {description, onInputChange, onResetForm} = useForm({
        description: '',
    });
    const onSubmit = (event) => {
        event.preventDefault();
        if (description.length < 1) {
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };
        addNewTodo(newTodo);
        onResetForm(event);
    };
    return (
        <>
            <h4>Add task</h4>
            <hr />
            <form onSubmit={onSubmit}>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Task..." name="description" onChange={onInputChange} value={description} />
                    <button className="btn btn-outline-secondary">+</button>
                </div>
            </form>
        </>
    )
}
