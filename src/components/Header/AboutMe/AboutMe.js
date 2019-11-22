import React from 'react';
import { Container, Image, Col, Row, Card, Nav } from 'react-bootstrap';

import gmailImg from '../../../../docs/images/Icons/iconfinder_gmail_132837.png';
import creddleImg from '../../../../docs/images/Icons/creddle.png';
import linkedinImg from '../../../../docs/images/Icons/linkedIn.svg';
import githubImg from '../../../../docs/images/Icons/github.svg';


function AboutMe() {

  return (
    <Container >
      <Row className="Header-Container">
        <Col sm="auto" md={1}></Col>
        <Col xs="auto">
          <Image src="https://i.imgur.com/SdAsfzc.jpg?3" roundedCircle className="AboutMe-Image" />
        </Col>
        <Col sm={5} md={7}>
          <Card.Title className="AboutMe-Title"><h1>Nic Graton:</h1> <h3>Fullstack Web Developer </h3></Card.Title>
          <Card.Text className="AboutMe-Text">
            I am a computational thinker with a passion for technology and a call to service. I served eight years as an Artillery Officer in the U.S. Army. Having recently completed the Fullstack Web Development bootcamp at Code Platoon, I’m ready to begin solving problems as a Software Engineer. 
          </Card.Text>
          <Nav className="AboutMe-Links">
            <Container fluid="true">
              <Row>
                <Col xs="auto">
                  <Nav.Link href="mailto:mail@ngraton.dev" className="Header-Link">
                    <Image src={gmailImg} className="Nav-Image"/>
                    Email
                  </Nav.Link>
                </Col>
                <Col xs="auto">
                  <Nav.Link href="https://resume.creddle.io/resume/b2dfyqjeb0f" className="Header-Link">
                    <Image src={creddleImg} className="Nav-Image"/>
                    Resume
                  </Nav.Link>
                </Col>
                <Col xs="auto">
                  <Nav.Link href="https://linkedin.com/in/ngraton/" className="Header-Link">
                    <Image src={linkedinImg} className="Nav-Image"/>
                    LinkedIn
                  </Nav.Link>
                </Col>
                <Col xs="auto">
                  <Nav.Link href="https://www.github.com/ngraton" className="Header-Link">
                    <Image src={githubImg} className="Nav-Image BlackImg"/>
                    GitHub
                  </Nav.Link>
                </Col>
              </Row>
            </Container>
          </Nav>
        </Col>
      </Row>              
    </Container>
  )
}

export default AboutMe;