import { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import './Navbar.scss';

function NavbarComponent() {    

    const [expanded, setExpanded] = useState(false);
    const [sticky, setSticky] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            setSticky(true);
        } else {
            setSticky(false);
        }
      }
    
      window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar
        expanded={expanded}
        fixed="top"
        expand="md"
        className={sticky ? "sticky" : "navbar"}>
        <Container>
            <Navbar.Brand href="/" className="d-flex">
            naaooj.github.io
            </Navbar.Brand>
            <Navbar.Toggle
            onClick={() => {
                setExpanded(expanded ? false : "expanded");
            }}
            >
            <span></span>
            <span></span>
            <span></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
                <Nav.Item>
                    <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
                        <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                    </Nav.Link>
                </Nav.Item>
    
                <Nav.Item>
                    <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>
                        <AiOutlineUser style={{ marginBottom: "2px" }} /> Contact
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default NavbarComponent;