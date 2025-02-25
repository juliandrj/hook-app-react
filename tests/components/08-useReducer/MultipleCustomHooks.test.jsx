import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../../src/components/03-examples/MultipleCustomHooks"
import { useFetch } from "../../../src/hooks/useFetch";
import { useCounter } from "../../../src/hooks/useCounter";

jest.mock('../../../src/hooks/useFetch');
jest.mock('../../../src/hooks/useCounter');

describe('Prueba de MultipleCustomHooks', () => {
    const mockIncrment = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrment,
    });
    beforeEach(() => {
        jest.clearAllMocks();
    });
    test('debe mostrar el componente por defecto', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: false
        });
        render(<MultipleCustomHooks />);
        expect(screen.getByText('Cargando...')).toBeTruthy();
        expect(screen.getByText('anterior')).toBeTruthy();

        const nextButton = screen.getByRole('button', {name: 'siguiente'});
        expect(nextButton.disabled).toBeTruthy();
    })
    test('debe mostrar el elemento solicitado', () => {
        const name = 'Pikachu';
        const imgUrl = 'http://imagen.com/img.jpg';
        useFetch.mockReturnValue({
            data: {
                'name': name,
                'sprites': {
                    'other': {
                        'official-artwork': {
                            'front_default': imgUrl
                        }
                    }
                }
            },
            isLoading: false,
            hasError: false
        });
        render(<MultipleCustomHooks />);
        expect(screen.getByText(name)).toBeTruthy();
        const img = screen.getByRole('img', {alt: name});
        expect(img.src).toBe(imgUrl);
        const nextButton = screen.getByRole('button', {name: 'siguiente'});
        expect(nextButton.disabled).toBeFalsy();
    })
    test('debe cambiar el contador', () => {
        const name = 'Pikachu';
        const imgUrl = 'http://imagen.com/img.jpg';
        useFetch.mockReturnValue({
            data: {
                'name': name,
                'sprites': {
                    'other': {
                        'official-artwork': {
                            'front_default': imgUrl
                        }
                    }
                }
            },
            isLoading: false,
            hasError: false
        });
        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', {name: 'siguiente'});
        fireEvent.click(nextButton);
        expect(mockIncrment).toHaveBeenCalled();
    })
})
