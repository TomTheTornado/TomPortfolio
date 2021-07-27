
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Projects() {
  return (
    <div>
      <Container>
        <h1>Projects</h1>
        <p>Take a look at some of the projects I've worked on over the years.</p>
        <Row>
          <Col><img src=""/></Col>
          <Col>Description of the thing worked on BossFightBattleGround</Col>
        </Row>
        <br/>
        <Row>
          <Col><img src=""/></Col>
          <Col>Description of the thing worked on SpriteMaker</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;