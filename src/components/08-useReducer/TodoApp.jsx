import { TodoList } from "./TodoList";
import { AddTodo } from "./AddTodo";
import { useTodos } from "../../hooks/useTodos";

export const TodoApp = () => {
    const {todos, todosCount, pendingTodoCount, addNewTodo, deleteTodo, toggleTodo} = useTodos();
    return (
        <>
            <h1>Todo App ({todosCount}) <small>pending todos: {pendingTodoCount}</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todoList={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
                </div>
                <div className="col-5">
                    <AddTodo addNewTodo={addNewTodo} />
                </div>
            </div>
        </>
    )
}
