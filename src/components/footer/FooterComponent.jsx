import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import './Footer.scss';

function FooterComponent() {

    let date = new Date();
    let year = date.getFullYear();

    return (
        <Container fluid className="footer">
            <Container>
                <Row>
                    <Col md={4} className="footer-author">
                        <h3>Designed and developed by Johann Bernez</h3>
                    </Col>
                    <Col md={4} className="footer-copyright">
                        <h3>Copyright © {year}</h3>
                    </Col>
                    <Col md={4} className="footer-social">
                        <ul className="footer-icons">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/naaooj"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/johann-bernez-ba7b1b10/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.instagram.com/naaoojb/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
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

export default FooterComponent;
