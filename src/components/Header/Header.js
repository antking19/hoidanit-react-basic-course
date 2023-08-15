import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <NavLink className="nav-link navbar-brand" to="/">
                    Hỏi Dân IT
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="nav-link" to="/">
                            Home
                        </NavLink>
                        <NavLink className="nav-link" to="/users">
                            Users
                        </NavLink>
                        <NavLink className="nav-link" to="/admin">
                            Admin
                        </NavLink>
                    </Nav>
                    <Nav>
                        <div className="button-container">
                            <button
                                className="btn btn-outline-dark btn-lg
                            me-3"
                            >
                                Log in
                            </button>
                            <button className="btn btn-dark btn-lg">
                                Sign up
                            </button>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
