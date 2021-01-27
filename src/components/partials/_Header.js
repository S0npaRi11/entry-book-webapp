import { BrowserRouter as Router, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
// import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import { FaEnvelope, FaUserCircle } from 'react-icons/fa'


// header will take user name, id, and other stuff as props
const Header = () => {
    return (
        <>
        {/* <Router> */}
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"> Logged User Name </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                        <Link to="/profile"> <FaUserCircle />&nbsp;Profile </Link>
                        <Link to="/messages"> <FaEnvelope />&nbsp;Messages </Link>
                        {/* <NavDropdown title= { <FaCog />}   id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1"> Update Password </NavDropdown.Item>
                        </NavDropdown> */}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        {/* </Router> */}
        </>
    )
}

export default Header
