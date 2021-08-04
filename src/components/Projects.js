
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
function Projects() {
  return (
    <div>
      <Container>
        <h1>Projects</h1>
        <Row className="contactInfo">
          <Col className="d-flex justify-content-center contactSidePadding">Take a look at some of the projects I've worked on over the years. These range from projects I've done on my own time as well as some projects I initially made as coursework.</Col>
        </Row>
        <Row className="d-flex align-items-center justify-content-center galleryRow">
          <Col className="justify-content-center"><img className="w-100" src="./projects/BFB.JPG"/></Col>
          <Col className="projectOrange">
            <Row><h4><a href="" target="_blank" rel="noopener noreferrer">Boss Fight Battlegrounds</a></h4></Row>
            <Row ><p>A 2D multiplayer side scrolling action game created with the Monogame framework.</p></Row>
            <Row ><p><i>Languages/Technologies:</i> C#, Monogame</p></Row>
          </Col>
        </Row>

        <Row className="d-flex align-items-center justify-content-center galleryRow">
          <Col className="projectGreen">
            <Row><h3><a href="https://adventuresconquest.herokuapp.com/" target="_blank" rel="noopener noreferrer">Sprite Creator</a></h3></Row>
            <Row ><p>- Javascript - A website for creating pixel art, and animations.</p></Row>
            <Row ><p><i>Languages/Technologies:</i> Javascript, HTML, CSS</p></Row>
          </Col>
          <Col className="justify-content-center"><img className="w-100 galleryImgR" src="./projects/spriteCreator.JPG"/></Col>
        </Row>

        <Row className="d-flex align-items-center justify-content-center galleryRow">
          <Col className="justify-content-center"><img className="w-100" src="./projects/adventureConquest.png"/></Col>
          <Col className="projectOrange">
            <Row><h3><a href="https://adventuresconquest.herokuapp.com/" target="_blank" rel="noopener noreferrer">Adventurer's Conquest</a></h3></Row>
            <Row ><p>Javascript - A multiplayer game that I helped contribute to at the Spring 2018 ISU Hackathon. This project won first place with the software section. My role was to design the art and assist as backup coding.</p></Row>
            <Row ><p><i>Languages/Technologies:</i> Javascript</p></Row>
          </Col>
        </Row>

        <Row className="d-flex align-items-center justify-content-center galleryRow">
          <Col className="projectGreen">
            <Row><h3><a href="https://devpost.com/software/photocenter-he1ajs" target="_blank" rel="noopener noreferrer">PhotoCenter</a></h3></Row>
            <Row ><p>A locally hosted photo management service with a web interface and android app created at the Fall 2019 ISU Hackathon. This project won "Best in UI Design." My role was designing and creating the user interface for the web app.</p></Row>
            <Row ><p><i>Languages/Technologies:</i> Javascript, HTML, CSS</p></Row>
          </Col>
          <Col className="justify-content-center"><img className="w-100" src="./projects/photocenter.jpg"/></Col>
        </Row>

        <Row className="d-flex align-items-center justify-content-center galleryRow">
          <Col className="justify-content-center"><img className="w-100" src="./projects/"/></Col>
          <Col className="projectOrange">
            <Row><h3><a href="https://github.com/TomTheTornado/COMS327/tree/master/Sudoku" target="_blank" rel="noopener noreferrer">Sudoku</a></h3></Row>
            <Row ><p>A game of Sudoku that can be played in the terminal. TODO</p></Row>
            <Row ><p><i>Languages/Technologies:</i> C#</p></Row>
          </Col>
        </Row>

        <Row className="d-flex align-items-center justify-content-center galleryRow">
          <Col className="projectGreen">
            <Row><h3><a href="https://github.com/TomTheTornado/COMS327/tree/master/Sudoku" target="_blank" rel="noopener noreferrer">Reversi</a></h3></Row>
            <Row ><p>A game of Reversi that can be played in the terminal. Initially created for CS437. Uses the min max algorithm for the computer AI.TODO</p></Row>
            <Row ><p>Language: C++</p></Row>
          </Col>
          <Col className="justify-content-center"><img className="w-100" src="./projects/"/></Col>
        </Row>

        <Row className="d-flex align-items-center justify-content-center galleryRow">
          <Col className="justify-content-center"><img className="w-100" src="./projects/photocenter.jpg"/></Col>
          <Col className="projectOrange">
            <Row><h3><a href="https://devpost.com/software/photocenter-he1ajs" target="_blank" rel="noopener noreferrer">Roguelike Dungeon Crawler</a></h3></Row>
            <Row ><p>A roguelike dungeon crawler created for ...TODO</p></Row>
            <Row ><p><i>Languages/Technologies:</i> C, C++</p></Row>
          </Col>
        </Row>

        <Row className="d-flex align-items-center justify-content-center galleryRow">
          <Col className="projectGreen">
            <Row><h3><a href="https://devpost.com/software/photocenter-he1ajs" target="_blank" rel="noopener noreferrer">ThreeJS Batsignal</a></h3></Row>
            <Row ><p>A batsignal I made for CS336 using ThreeJS ...TODO</p></Row>
            <Row ><p><i>Languages/Technologies:</i> Javascript, Three.js, HTML</p></Row>
          </Col>
          <Col className="justify-content-center"><img className="w-100" src="./projects/batSignal.jpg"/></Col>
        </Row>

        <Row className="d-flex align-items-center justify-content-center galleryRow">
          <Col className="justify-content-center"><img className="w-100" src="./projects/photocenter.jpg"/></Col>
          <Col className="projectOrange">
            <Row><h3><a href="https://devpost.com/software/photocenter-he1ajs" target="_blank" rel="noopener noreferrer">Space Race Game</a></h3></Row>
            <Row ><p>A roguelike dungeon crawler created for ...TODO</p></Row>
            <Row ><p><i>Languages/Technologies:</i> C#, Monogame</p></Row>
          </Col>
        </Row>
      </Container>
      <br/><br/><br/>
    </div>
  );
}

export default Projects;