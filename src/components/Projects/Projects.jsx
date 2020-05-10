import React from 'react';
import { Jumbotron, Nav, CardDeck, Card } from 'react-bootstrap';
import './Projects.css'

function Projects() {

  return (
    <Jumbotron className="Sun-tron">
      <h1 id="Projects" className='Projects-title'>Projects</h1>
          <CardDeck className="Projects-Container">
              <Card className="Projects-Card">
                <Card.Header className="Project-CardHeader">
                  <h3>PacManGo</h3>
                </Card.Header>
                <Card.Img variant="top" src="https://imgur.com/WLJQF0w.png" />
                <Card.Body>
                  <Card.Title className="Project-CardTitle">Description:</Card.Title>
                  <Card.Text>A running app that uses gamification to turn your neighborhood streets into a pac-man like game world where movement is determined by your geolocation data. </Card.Text>
                  <Card.Title className="Project-CardTitle">Technologies Used:</Card.Title>
                  <Card.Text>Mapbox, Openlayers, React, Django, django-rest-auth</Card.Text>
                  <Nav className="flex-column">
                    <div className="Project-CardLink">
                    <Nav.Link href="https://pac-man-go.herokuapp.com">Try it!</Nav.Link>
                    <Nav.Link href="https://github.com/ngraton/pac-man-go-react">GitHub Repo</Nav.Link>
                    </div>
                  </Nav>
                </Card.Body>
              </Card>
              {/* <Card className="Projects-Card">
                <Card.Header className="Project-CardHeader">
                  <h3>SubReckoner</h3>
                </Card.Header>
                <Card.Img variant="top" src="https://i.imgur.com/pkcbnoU.png" />
                <Card.Body>
                  <Card.Title className="Project-CardTitle">Description:</Card.Title>
                  <Card.Text>A Code Platoon Group Project. Subscription management app that organizes users' subscriptions by month so the user knows exactly what bills you have and the cost of those bills each month. Also shows pie chart and bar chart for visualizations. Sends out text notifications once a month. </Card.Text>
                  <Card.Title className="Project-CardTitle">Technologies Used:</Card.Title>
                  <Card.Text>React, Django, React-vis (visualization library), django-rest-auth, Twilio, PostgreSQL</Card.Text>
                  <Nav className="flex-column">
                    <div className="Project-CardLink">
                    <Nav.Link href="https://subreckoner.herokuapp.com">Try it!</Nav.Link>
                    <Nav.Link href="https://github.com/ngraton/subscription-frontend-mirror"> Frontend GitHub Repo</Nav.Link>
                    <Nav.Link href="https://github.com/ngraton/PacManGo-Backend">Backend GitHub Repo</Nav.Link>
                    </div>
                  </Nav>
                </Card.Body>
              </Card> */}
            </CardDeck>
    </Jumbotron>
  )
}

export default Projects;