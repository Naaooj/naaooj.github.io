import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
    AiFillGithub,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import './Contact.scss';
import contactLogo from "../../assets/programming.svg";

class ContactComponent extends Component {
    render() {
        return (
            <Container fluid className="contact-section" id="contact">
                <Container>
                    <Row>
                        <Col md={4} className="contact-header">
                            <img src={contactLogo} alt="Welcome home" className="img-fluid" style={{ maxHeight: "450px" }} />
                        </Col>
                        <Col md={8} className="contact-social">
                            <h1>You want to <span className="highlight">contact</span> me?</h1>
                            <p>
                                Feel free to <span className="highlight">connect</span> with one of the following social network:
                            </p>
                            <ul className="contact-icons">
                                <li className="social-icons">
                                    <a href="https://github.com/naaooj" className="social-icon" target="_blank" rel="noopener noreferrer">
                                        <AiFillGithub />
                                    </a>
                                </li>
                                <li className="social-icons">
                                    <a href="https://www.linkedin.com/in/johann-bernez-ba7b1b10/" className="social-icon" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedinIn />
                                    </a>
                                </li>
                                <li className="social-icons">
                                    <a href="https://www.instagram.com/naaoojb/" className="social-icon" target="_blank" rel="noopener noreferrer">
                                        <AiFillInstagram />
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default ContactComponent;