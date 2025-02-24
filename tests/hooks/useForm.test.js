import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe('Pruebas en useForm', () => {
    const initialForm = {
        name: 'Julian Rojas',
        email: 'julian@me.com'
    };
    test('debe retornar los valores por defecto', () => {
        const {result} = renderHook(() => useForm(initialForm));
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        });
    })
    test('debe cambiar los valores', () => {
        const newForm = {
            name: 'Daniel Rojas',
            email: 'daniel@me.com'
        };
        const {result} = renderHook(() => useForm(initialForm));
        const {onInputChange} = result.current;
        act(() => {
            const eventMock = {
                target: {
                    name: 'name',
                    value: newForm.name
                }
            };
            onInputChange(eventMock);
        });
        expect(result.current.name).toBe(newForm.name);
        expect(result.current.formState.name).toBe(newForm.name);
    })
    test('debe resetear el formulario', () => {
        const newForm = {
            name: 'Daniel Rojas',
            email: 'daniel@me.com'
        };
        const {result} = renderHook(() => useForm(initialForm));
        const {onInputChange, onResetForm} = result.current;
        act(() => {
            const eventMock = {
                target: {
                    name: 'name',
                    value: newForm.name
                }
            };
            onInputChange(eventMock);
            onResetForm({
                preventDefault: () => {}
            });
        });
        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);
    })
})