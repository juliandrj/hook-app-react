import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { UserContext } from "./context/UserContext"

export const Navbar = () => {
    const {user} = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">useContext</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink className={({isActive}) => `nav-link${isActive ? ' active' : ''}`} to="/">
                            Home
                        </NavLink>
                        <NavLink className={({isActive}) => `nav-link${isActive ? ' active' : ''}`} to="/about">
                            About
                        </NavLink>
                        <NavLink className={({isActive}) => `nav-link${isActive ? ' active' : ''}`} to="/login">
                            Login
                        </NavLink>
                    </ul>
                    <span className="navbar-text">{user?.name}</span>
                </div>
            </div>
        </nav>
    )
}
