import { TodoItem } from "./TodoItem"

export const TodoList = ({todoList, deleteTodo, toggleTodo}) => {
    return (
        <>
            <h4>To do list</h4>
            <ul className="list-group">
                {todoList.map((task) => <TodoItem key={task.id} task={task} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />)}
            </ul>
        </>
    )
}
