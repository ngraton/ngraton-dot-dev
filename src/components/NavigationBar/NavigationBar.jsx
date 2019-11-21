import React from 'react';
import { Navbar, Nav, Image, NavDropdown } from 'react-bootstrap';

import StyleContext from '../../StyleContext';

import gmailImg from '../../images/Icons/iconfinder_gmail_132837.png';
import creddleImg from '../../images/Icons/creddle.png';
import linkedinImg from '../../images/Icons/linkedIn.svg';
import githubImg from '../../images/Icons/github.svg';
import './NavigationBar.css';

function NavigationBar() {

  const context = React.useContext(StyleContext);

 

  return (
    <Navbar className="NavigationBar-NavBar justify-content-between" sticky="top" expand="lg">
      <Navbar.Brand className="NavigationBar-Brand">Nic Graton</Navbar.Brand>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="NavigationBar-Nav-Left">
          <Nav.Link className="Nav-Element" href="#AboutMe">About Me</Nav.Link>
          <Nav.Link className="Nav-Element" href="#Projects">Projects</Nav.Link>
          <Nav.Link className="Nav-Element" href="#Tech">Technologies</Nav.Link>
          <Nav.Link className="Nav-Element" href="#Writings">Writing</Nav.Link>
          <NavDropdown title="Change Style" id="navbar-dropdown" onSelect={selectedKey => context.changeStyle(selectedKey)} className="NavigationBar-Dropdown">
            <NavDropdown.Item eventKey="Modern" className="Nav-Element">
              Modern
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="Eighties" className="Nav-Element">
              '80s
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="Nav-Toggle"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="NavigationBar-Nav-Right ml-auto">
          <Nav.Link className="Nav-Element" href="mailto:mail@ngraton.dev">
            <Image src={gmailImg} className="Nav-Image"/>
            Email
          </Nav.Link>
          <Nav.Link className="Nav-Element" href="https://resume.creddle.io/resume/b2dfyqjeb0f">
            <Image src={creddleImg} className="Nav-Image"/>
            Resume
          </Nav.Link>
          <Nav.Link className="Nav-Element" href="https://linkedin.com/in/ngraton/">
            <Image src={linkedinImg} className="Nav-Image"/>
            LinkedIn
          </Nav.Link>
          <Nav.Link className="Nav-Element" href="https://www.github.com/ngraton">
            <Image src={githubImg} className="Nav-Image BlackImg"/>
            GitHub
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar;