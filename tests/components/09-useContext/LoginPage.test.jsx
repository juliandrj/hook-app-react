import { fireEvent, render, screen } from "@testing-library/react"
import { UserContext } from "../../../src/components/09-useContext/context/UserContext"
import { LoginPage } from "../../../src/components/09-useContext/LoginPage"

describe('Pruebas de LoginPage', () => {
    test('debe llamar función de contexto para setear usuario', () => {
        const setUserMock = jest.fn();
        render(<UserContext.Provider value={{user: null, setUser: setUserMock}}>
            <LoginPage />
        </UserContext.Provider>);
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(setUserMock).toHaveBeenCalled();
    })
})