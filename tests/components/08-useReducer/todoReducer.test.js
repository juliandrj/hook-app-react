import { todoReducer } from "../../../src/components/08-useReducer/todoReducer";

describe('Prueba de todoReducer', () => {
    const initialState = [{
        id: 1,
        desc: 'Hola mundo!',
        done: false
    }];
    test('debe retornar el estado por defecto', () => {
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
    })
    test('debe agregar un todo', () => {
        const action = {
            type: '[TODO] Add',
            payload: {
                id: 2,
                desc: 'Otro hola mundo',
                done: true
            }
        };
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    })
    test('debe eliminar un todo', () => {
        const action = {
            type: '[TODO] Del',
            payload: 1
        };
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);
    })
    test('debe eliminar un todo', () => {
        const action = {
            type: '[TODO] Del',
            payload: 1
        };
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);
    })
    test('debe cambiar el estado de un todo', () => {
        const action = {
            type: '[TODO] Toggle',
            payload: 1
        };
        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBeTruthy();
        const newState2 = todoReducer(newState, action);
        expect(newState2[0].done).toBeFalsy();
    })
})