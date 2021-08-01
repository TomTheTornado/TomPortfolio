
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Projects() {
  return (
    <div>
      <Container>
        <h1>Projects</h1>
        <p className="d-flex justify-content-center">Take a look at some of the projects I've worked on over the years.</p>
        <Row>
          <Col className="d-flex align-items-center"><img src=""/></Col>
          <Col className="d-flex align-items-center"><a href="">Boss Fight Battlegrounds</a><p> - C# - A 2D multiplayer side scrolling action game created with the Monogame framework.</p></Col>
        </Row>
        <br/>
        <Row>
          <Col className="d-flex align-items-center"><img src=""/></Col>
          <Col className="d-flex align-items-center"><a href="">Sprite Creator</a><p> - Javascript - A website for creating pixel art, and animations.</p></Col>
        </Row>
        <br/>
        <Row>
          <Col className="d-flex align-items-center"><img className="w-100" src="./projects/adventureConquest.png"/></Col>
          <Col className="d-flex align-items-center"><a href="https://adventuresconquest.herokuapp.com/">Adventurer's Conquest</a><p> - Javascript - A multiplayer game that I helped contribute to at the Spring 2018 ISU Hackathon. This project won first place with the software section. My role was to design the art and assist as backup coding.</p></Col>
        </Row>
        <br/>
        <Row>
          <Col className="d-flex align-items-center"><img className="w-100" src="./projects/photocenter.jpg"/></Col>
          <Col className="d-flex align-items-center"><a href="https://devpost.com/software/photocenter-he1ajs">PhotoCenter</a><p> - Javascript - A locally hosted photo management service with a web interface and android app created at the Fall 2019 ISU Hackathon. This project won "Best in UI Design." My role was designing and creating the user interface for the web app.</p></Col>
        </Row>
      </Container>
      <br/><br/><br/>
    </div>
  );
}

export default Projects;