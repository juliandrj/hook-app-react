export const TodoItem = ({task, deleteTodo, toggleTodo}) => {
    const {id, desc, done} = task;
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span aria-label="description-text" className={`align-self-center${done ? '' : ' text-danger'}`}>{desc}</span>
            <div className="btn-group">
                <button aria-label="btn-done" className={`btn btn-outline-${done ? 'success' : 'danger'}`} onClick={() => toggleTodo(id)}>{done ? 'todo' : 'done'}</button>
                <button aria-label="btn-delete" className="btn btn-outline-danger" type="button" onClick={() => deleteTodo(id)}>-</button>
            </div>
        </li>
    )
}
