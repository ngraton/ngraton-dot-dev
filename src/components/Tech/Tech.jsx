import React from 'react';
import { Card, Container, Image, Row, Col, OverlayTrigger, Popover, Nav } from 'react-bootstrap';

import StyleContext from '../../StyleContext';
import TechObjArr from '../../../data/Technologies';

import './Tech.css'

function Tech() {

  const context = React.useContext(StyleContext);

  const buildTechs = (ObjArr) => {
    return ObjArr.map(TechObj => (
      <Col xs="auto" key={TechObj.tech + '-col'}>
        <OverlayTrigger
          trigger="click"
          key={TechObj.tech}
          placement='bottom'
          overlay={
            <Popover id={TechObj.tech + '-popover'} >
              <Popover.Title as="h3" className={context.style + " Popover-Title"}>{TechObj.tech}</Popover.Title>
              <Popover.Content className={context.style + " Popover-Content"}>
                {TechObj.description}
              </Popover.Content>
              <Nav.Link href={TechObj.website} className={context.style + " Popover-Link"}>More Info</Nav.Link>
            </Popover>
          } 
        >
          <Image src={TechObj.image} className="Tech-Icon" />
        </OverlayTrigger>
      </Col>
    ))
  }
  return (
    <Card fluid="true" bg="dark" text="white" className="Tech-Card">
      <Card.Title className="Tech-Title">
        <h1 id="Tech">Technologies</h1>
      </Card.Title>
      <Card.Text className="Tech-Text">Click an icon for more info</Card.Text>
      <Container fluid >
        <Row className="Tech-Container">
          {buildTechs(TechObjArr)}
        </Row>
      </Container>
    </Card>
  )
}

export default Tech;