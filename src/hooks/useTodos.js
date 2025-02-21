import { useEffect, useReducer } from "react";
import { todoReducer } from "../components/08-useReducer/todoReducer";

export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], () => JSON.parse(localStorage.getItem('todos')) || []);
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    const addNewTodo = (todo) => {
        dispatch({
            type: '[TODO] Add',
            payload: todo
        });
    };
    const deleteTodo = (id) => {
        dispatch({
            type: '[TODO] Del',
            payload: id
        });
    };
    const toggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle',
            payload: id
        });
    };
    return {
        todos,
        todosCount: todos.length,
        pendingTodoCount: todos.filter(todo => !todo.done).length,
        addNewTodo,
        deleteTodo,
        toggleTodo
    };
}
