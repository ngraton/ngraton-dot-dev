import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import StyleContext from '../../../StyleContext';

import './StyleModal.css';



function StyleModal() {

  const context = React.useContext(StyleContext)

  return (
    <Modal
    show={!context.style}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header>
      <Modal.Title id="contained-modal-title-vcenter">
        Choose a Style for this Page
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>Hi, I'm Nic Graton, a Full Stack Web Developer. This is my webpage. Before continuing, please choose a style from the options below:</p>
      <Button size="sm"
      // onClick={() => context.changeStyle('EasterEgg')}
      className='Egg-Button' />
      <Button variant="primary" size="lg" block onClick={() => context.changeStyle('Modern')} className="Modern Style-Button">
        Modern
      </Button>
      <Button variant="secondary" size="lg" block onClick={() => context.changeStyle('Eighties')} className="Eighties Style-Button">
        Totally '80<span>s</span>
      </Button>
    </Modal.Body>
  </Modal>
  )
}

export default StyleModal;