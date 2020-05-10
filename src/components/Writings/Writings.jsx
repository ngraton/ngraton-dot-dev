import React from 'react';
import { Jumbotron, Card, Accordion, Button } from 'react-bootstrap';

import './Writings.css'


function Writings() {

  return (
    <Jumbotron className="Other-tron" >
      <h1 className='Writings-title' id="Writings">Writings</h1>
      <Accordion>
        <Card className="Writings-Card">
          <Card.Header className="Writings-CardHeader">
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              <h3 className="Writings-CardLink">My First Tutorial</h3>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="Writings-CardBody">
              <Card.Title className="Writings-CardTitle">Description:</Card.Title>
              <Card.Text>Coming Soon!</Card.Text>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Jumbotron>
  )
}

export default Writings;