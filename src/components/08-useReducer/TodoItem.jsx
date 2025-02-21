export const TodoItem = ({task, deleteTodo, toggleTodo}) => {
    const {id, desc, done} = task;
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className={`align-self-center${done ? '' : ' text-danger'}`}>{desc}</span>
            <div className="btn-group">
                <button className={`btn btn-outline-${done ? 'success' : 'danger'}`} onClick={() => toggleTodo(id)}>{done ? 'todo' : 'done'}</button>
                <button className="btn btn-outline-danger" type="button" onClick={() => deleteTodo(id)}>-</button>
            </div>
        </li>
    )
}
