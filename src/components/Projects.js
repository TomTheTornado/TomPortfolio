
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
          <Col className="d-flex align-items-center"><a href="" target="_blank" rel="noopener noreferrer">Boss Fight Battlegrounds</a><p> - C# - A 2D multiplayer side scrolling action game created with the Monogame framework.</p></Col>
        </Row>
        <br/>
        <Row>
          <Col className="d-flex align-items-center"><img src=""/></Col>
          <Col className="d-flex align-items-center"><a href="" target="_blank" rel="noopener noreferrer">Sprite Creator</a><p> - Javascript - A website for creating pixel art, and animations.</p></Col>
        </Row>
        <br/>
        <Row>
          <Col className="d-flex align-items-center"><img className="w-100" src="./projects/adventureConquest.png"/></Col>
          <Col className="d-flex align-items-center"><a href="https://adventuresconquest.herokuapp.com/" target="_blank" rel="noopener noreferrer">Adventurer's Conquest</a><p> - Javascript - A multiplayer game that I helped contribute to at the Spring 2018 ISU Hackathon. This project won first place with the software section. My role was to design the art and assist as backup coding.</p></Col>
        </Row>
        <br/>
        <Row className="d-flex align-items-center justify-content-center">
          <Col>
            <Row><h3><a href="https://devpost.com/software/photocenter-he1ajs" target="_blank" rel="noopener noreferrer">PhotoCenter</a></h3></Row>
            <Row ><p>A locally hosted photo management service with a web interface and android app created at the Fall 2019 ISU Hackathon. This project won "Best in UI Design." My role was designing and creating the user interface for the web app.</p></Row>
            <Row ><p>Language: Javascript</p></Row>
          </Col>
          <Col className="justify-content-center"><img className="w-100" src="./projects/photocenter.jpg"/></Col>
        </Row>
        <br/>
        <Row className="d-flex align-items-center justify-content-center">
          <Col>
            <Row><h3><a href="https://github.com/TomTheTornado/COMS327/tree/master/Sudoku" target="_blank" rel="noopener noreferrer">Sudoku</a></h3></Row>
            <Row ><p>A game of Sudoku that can be played in the terminal. TODO</p></Row>
            <Row ><p>Language: C++</p></Row>
          </Col>
          <Col className="justify-content-center"><img className="w-100" src="./projects/"/></Col>
        </Row>
        <br/>
        <Row className="d-flex align-items-center justify-content-center">
          <Col>
            <Row><h3><a href="https://github.com/TomTheTornado/COMS327/tree/master/Sudoku" target="_blank" rel="noopener noreferrer">Reversi</a></h3></Row>
            <Row ><p>A game of Reversi that can be played in the terminal. Initially created for CS437. Uses the min max algorithm for the computer AI.TODO</p></Row>
            <Row ><p>Language: C++</p></Row>
          </Col>
          <Col className="justify-content-center"><img className="w-100" src="./projects/"/></Col>
        </Row>
        <br/>
        <Row className="d-flex align-items-center justify-content-center">
          <Col>
            <Row><h3><a href="https://devpost.com/software/photocenter-he1ajs" target="_blank" rel="noopener noreferrer">Roguelike Dungeon Crawler</a></h3></Row>
            <Row ><p>A roguelike dungeon crawler created for ...TODO</p></Row>
            <Row ><p>Language: C, C++</p></Row>
          </Col>
          <Col className="justify-content-center"><img className="w-100" src="./projects/photocenter.jpg"/></Col>
        </Row>
        <Row className="d-flex align-items-center justify-content-center">
          <Col>
            <Row><h3><a href="https://devpost.com/software/photocenter-he1ajs" target="_blank" rel="noopener noreferrer">ThreeJS Batsignal</a></h3></Row>
            <Row ><p>A batsignal I made for CS336 using ThreeJS ...TODO</p></Row>
            <Row ><p>Language: Javascript</p></Row>
          </Col>
          <Col className="justify-content-center"><img className="w-100" src="./projects/photocenter.jpg"/></Col>
        </Row>
        <Row className="d-flex align-items-center justify-content-center">
          <Col>
            <Row><h3><a href="https://devpost.com/software/photocenter-he1ajs" target="_blank" rel="noopener noreferrer">Roguelike Dungeon Crawler</a></h3></Row>
            <Row ><p>A roguelike dungeon crawler created for ...TODO</p></Row>
            <Row ><p>Language: C, C++</p></Row>
          </Col>
          <Col className="justify-content-center"><img className="w-100" src="./projects/photocenter.jpg"/></Col>
        </Row>
      </Container>
      <br/><br/><br/>
    </div>
  );
}

export default Projects;