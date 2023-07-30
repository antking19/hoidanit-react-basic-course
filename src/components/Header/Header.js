import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function Header() {
    return (
        <Navbar
            expand="lg"
            className="navbar navbar-expand-lg bg-body-tertiary"
        >
            <Container>
                <Navbar.Brand href="#home">Hỏi Dân IT</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                        <Link to="/users" className="nav-link">
                            Users
                        </Link>
                        <Link to="/admin" className="nav-link">
                            Admin
                        </Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Setting" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                Log in
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Log out
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Profile
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
