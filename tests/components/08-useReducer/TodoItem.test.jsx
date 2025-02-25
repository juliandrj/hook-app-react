import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../../src/components/08-useReducer/TodoItem";

describe('Pruebas de TodoItem', () => {
    const todo = {
        id: 1,
        desc: 'Prueba',
        done: false
    };
    const todo2 = {
        id: 2,
        desc: 'Prueba 2',
        done: true
    };
    const deleteTodoMock = jest.fn();
    const toggleTodoMock = jest.fn();
    beforeEach(() => jest.resetAllMocks());
    test('debe mostrar el TODO pendiente de completar', () => {
        render(<TodoItem task={todo} deleteTodo={deleteTodoMock} toggleTodo={toggleTodoMock} />)
        const item = screen.getByRole('listitem');
        expect(item.innerHTML).toContain(todo.desc);
        const btnDone = screen.getByLabelText('btn-done');
        expect(btnDone.className).toContain('btn-outline-danger');
    })
    test('debe mostrar el TODO completado', () => {
        render(<TodoItem task={todo2} deleteTodo={deleteTodoMock} toggleTodo={toggleTodoMock} />)
        const btnDone = screen.getByLabelText('btn-done');
        expect(btnDone.className).toContain('btn-outline-success');
    })
    test('debe el toggle cuando se hace click', () => {
        render(<TodoItem task={todo} deleteTodo={deleteTodoMock} toggleTodo={toggleTodoMock} />)
        const btnDone = screen.getByLabelText('btn-done');
        fireEvent.click(btnDone);
        expect(toggleTodoMock).toHaveBeenCalledWith(todo.id);
    })
    test('debe el delete cuando se hace click', () => {
        render(<TodoItem task={todo} deleteTodo={deleteTodoMock} toggleTodo={toggleTodoMock} />)
        const btnDelete = screen.getByLabelText('btn-delete');
        fireEvent.click(btnDelete);
        expect(deleteTodoMock).toHaveBeenCalledWith(todo.id);
    })
})