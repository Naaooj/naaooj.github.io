import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import homeLogo from "../../assets/feeling_proud.svg";
import './Home.scss';
import TypeWriterComponent from "./TypeWriterComponent";

class HomeComponent extends Component {
    render() {
        return (
            <Container fluid className="home-section" id="home">
                <Container>
                    <Row>
                        <Col md={7} className="home-header">
                            <h1 className="heading">
                                Hi there!{" "}
                                <span className="wave" role="img">
                                    👋🏻
                                </span>
                            </h1>

                            <h1 className="heading heading-name">
                                I'm <strong>Johann BERNEZ</strong>
                            </h1>

                            <h1 className="heading">
                                <TypeWriterComponent />
                            </h1>

                            <h1 className="heading">
                                Welcome to my personal space on GitHub.
                            </h1>
                        </Col>
                        <Col md={5} className="home-header">
                            <img src={homeLogo} alt="Welcome home" className="img-fluid" style={{ maxHeight: "450px" }} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} className="description">
                            <h1 style={{ fontSize: "2.6em" }}>
                            LET ME <span className="highlight"> INTRODUCE </span> MYSELF
                            </h1>
                            <p className="">
                            I am 37 years old and I started programming at the age of 14 with my calculator. 
                            <br />
                            Since then, I've been practicing different languages and technologies until I got graduated in 2009.
                            <br />
                            Over the past 13 years, I've been focusing on <span className="highlight">full stack development</span>, specialising myself with Java, Spring ang Angular.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default HomeComponent;