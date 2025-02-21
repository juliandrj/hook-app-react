export const todoReducer = (initialSate, action) => {
    switch (action.type) {
        case '[TODO] Add':
            return [
                ...initialSate,
                action.payload
            ];
        case '[TODO] Del':
            return initialSate.filter(todo => todo.id !== action.payload);
        case '[TODO] Toggle':
            return initialSate.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    };
                }
                return todo;
            });
        default:
            return initialSate;
    }
};