
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
          <Col><img src=""/></Col>
          <Col><a href="">Boss Fight Battlegrounds</a><p> - C# - A 2D multiplayer side scrolling action game created with the Monogame framework.</p></Col>
        </Row>
        <br/>
        <Row>
          <Col><img src=""/></Col>
          <Col><a href="">Sprite Creator</a><p> - Javascript - A website for creating pixel art, and animations.</p></Col>
        </Row>
        <Row>
          <Col><img src=""/></Col>
          <Col><a href="https://adventuresconquest.herokuapp.com/">Adventurer's Conquest</a><p> - Javascript - A multiplayer game that I helped contribute to at the Spring 2018 ISU Hackathon. This project won first place with the software section. My role was to design the art and help as backup coding.</p></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;