import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';

import StyleContext from '../../StyleContext';

import githubImg from '../../images/Icons/github.svg';
import './Footer.css';

function Footer() {
  const context = React.useContext(StyleContext);


  return (
    <Navbar className="Footer-NavBar">
      <Nav>
        <Navbar.Text className="Footer-Text">This page was built with ReactJS.</Navbar.Text>
        <Nav.Link href="https://www.github.com/ngraton/protfolio_site" className="Footer-Text"> {'Check it out on '}
          <Image src={githubImg} className="Nav-Image BlackImg"/>
          GitHub
        </Nav.Link>
      </Nav>
      <Nav>
        <Navbar.Text className="Footer-Text">Copyright <span className="copyright"><strong>{"\u00A9"}</strong></span> ngraton.dev</Navbar.Text>
      </Nav>
    </Navbar>
  )
}

export default Footer;
