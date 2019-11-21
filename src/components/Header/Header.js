import React from 'react';
import { Card } from 'react-bootstrap'

import StyleContext from '../../StyleContext';
import AboutMe from './AboutMe/AboutMe';
import StyleModal from './StyleModal/StyleModal';
import Arrow from '../Arrow/Arrow';

import './Header.css';

function Header() {

  const context = React.useContext(StyleContext)

  return (
    <div id="AboutMe">
      <Card fluid="true" className="Header">
        {!!context.style ? <AboutMe /> : <StyleModal />}
        {!!context.style && <Arrow />}
      </Card>
    </div>
  )
}

export default Header;