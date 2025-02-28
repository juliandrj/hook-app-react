import { render, screen } from "@testing-library/react"
import { UserContext } from "../../../src/components/09-useContext/context/UserContext"
import { HomePage } from "../../../src/components/09-useContext/HomePage"

describe('Pruebas de HomePage', () => {
    test('debe mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{user: null}}>
                <HomePage />
            </UserContext.Provider>
        )
    })
})