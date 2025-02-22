import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe('Pruebas en useCounter', () => {
    test('debe retornar los valores por defecto', () => {
        const defaultValue = 50;
        const {result} = renderHook(() => useCounter(defaultValue));
        const {counter, increment, decrement, reset} = result.current;
        expect(counter).toBe(defaultValue);
        expect(increment).toEqual(expect.any(Function));
        expect(decrement).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    })
    test('debe incrementar el counter con increment', () => {
        const defaultValue = 50;
        const incrementValue = 25;
        const {result} = renderHook(() => useCounter(defaultValue));
        const {increment} = result.current;
        act(() => {
            increment(incrementValue);
            increment(incrementValue);
        });
        expect(result.current.counter).toBe(defaultValue + 2*incrementValue);
    })
    test('debe decrementar el counter con decrement', () => {
        const defaultValue = 50;
        const decrementValue = 25;
        const {result} = renderHook(() => useCounter(defaultValue));
        const {decrement} = result.current;
        act(() => {
            decrement(decrementValue);
            decrement(decrementValue);
        });
        expect(result.current.counter).toBe(defaultValue - 2*decrementValue);
    })
    test('debe resetear el counter', () => {
        const defaultValue = 50;
        const decrementValue = 25;
        const {result} = renderHook(() => useCounter(defaultValue));
        const {decrement, reset} = result.current;
        act(() => {
            decrement(decrementValue);
            reset();
        });
        expect(result.current.counter).toBe(defaultValue);
    })
})