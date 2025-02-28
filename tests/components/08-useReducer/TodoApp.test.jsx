import { render, screen } from "@testing-library/react"
import { TodoApp } from "../../../src/components/08-useReducer/TodoApp"
import { useTodos } from "../../../src/hooks/useTodos"

jest.mock('../../../src/hooks/useTodos');

describe('Prueba de TodoApp', () => {
    const todosMock = [{
        id: 1,
        desc: 'Prueba',
        done: false
    },
    {
        id: 2,
        desc: 'Prueba 2',
        done: true
    }];
    test('debe mostrar el componente correctamente', () => {
        useTodos.mockReturnValue({
            todos: todosMock,
            todosCount: todosMock.length,
            pendingTodoCount: todosMock.filter(todo => !todo.done).length,
            addNewTodo: jest.fn(),
            deleteTodo: jest.fn(),
            toggleTodo: jest.fn()
        });
        render(<TodoApp />);
        screen.debug();
    })
})