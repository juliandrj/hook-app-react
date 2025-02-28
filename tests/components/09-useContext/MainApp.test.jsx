import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../../src/components/09-useContext/MainApp";

describe('Pruebas en MainApp', () => {
    test('debe iniciar en el HomePage', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <MainApp />
            </MemoryRouter>
        );
        expect(screen.getByText('HomePage')).toBeTruthy();
    })
    test('debe cargar en el LoginPage', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );
        expect(screen.getByText('LoginPage')).toBeTruthy();
    })
})