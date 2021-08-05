
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
          <Col className="d-flex justify-content-center contactSidePadding">Take a look at some of the projects I've worked on over the years. These range from projects I've done on my own time as well as some projects I initially made as coursework. -TODO add alts on them</Col>
        </Row>
        <Row className="d-flex align-items-center justify-content-center galleryRow">
          <Col className="justify-content-center">
          <a href="https://github.com/TomTheTornado/Boss-Fight-Battleground" target="_blank" rel="noopener noreferrer"><img alt="Boss Fight Battlegrounds" className="w-100 imgClick" src="./projects/BFB.JPG"/></a>
          </Col>
          <Col className="projectOrange">
            <Row><h3>Boss Fight Battlegrounds</h3></Row>
            <Row ><p>A 2D multiplayer side scrolling action game created with the Monogame framework.</p></Row>
            <Row ><p><i>Languages/Technologies:</i> C#, Monogame</p></Row>
          </Col>
        </Row>

        <Row className="d-flex align-items-center justify-content-center galleryRow">
          <Col className="projectGreen">
            <Row><h3>Sprite Creator</h3></Row>
            <Row ><p>- Javascript - A website for creating pixel art, and animations.</p></Row>
            <Row ><p><i>Languages/Technologies:</i> Javascript, HTML, CSS</p></Row>
          </Col>
          <Col className="justify-content-center"><a href="https://tomthetornado.github.io/SpriteMaker/src/index.html" target="_blank" rel="noopener noreferrer"><img alt="Sprite Creator" className="w-100 galleryImgR imgClick" src="./projects/spriteCreator.JPG"/></a></Col>
        </Row>

        <Row className="d-flex align-items-center justify-content-center galleryRow">
          <Col className="justify-content-center"><a href="https://adventuresconquest.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img alt="Adventurer's Conquest" className="w-100 imgClick" src="./projects/adventureConquest.jpg"/></a></Col>
          <Col className="projectOrange">
            <Row><h3>Adventurer's Conquest</h3></Row>
            <Row ><p>Javascript - A multiplayer game that I helped contribute to at the Spring 2018 ISU Hackathon. This project won first place with the software section. My role was to design the art and assist as backup coding.</p></Row>
            <Row ><p><i>Languages/Technologies:</i> Javascript</p></Row>
          </Col>
        </Row>

        <Row className="d-flex align-items-center justify-content-center galleryRow">
          <Col className="projectGreen">
            <Row><h3>PhotoCenter</h3></Row>
            <Row ><p>A locally hosted photo management service with a web interface and android app created at the Fall 2019 ISU Hackathon. This project won "Best in UI Design." My role was designing and creating the user interface for the web app.</p></Row>
            <Row ><p><i>Languages/Technologies:</i> Javascript, HTML, CSS</p></Row>
          </Col>
          <Col className="justify-content-center"><a href="https://devpost.com/software/photocenter-he1ajs" target="_blank" rel="noopener noreferrer"><img alt="PhotoCenter" className="w-100 imgClick" src="./projects/photocenter.jpg"/></a></Col>
        </Row>

        <Row className="d-flex align-items-center justify-content-center galleryRow">
          <Col className="justify-content-center">
            <a href="https://github.com/TomTheTornado/COMS327/tree/master/Sudoku" target="_blank" rel="noopener noreferrer"><img alt="Sudoku Console" className="w-100 imgClick imgBorder" src="./projects/sudoku.jpg"/></a>
          </Col>
          <Col className="projectOrange">
            <Row><h3>Sudoku</h3></Row>
            <Row ><p>A game of Sudoku that can be played in the terminal. TODO</p></Row>
            <Row ><p><i>Languages/Technologies:</i> C++</p></Row>
          </Col>
        </Row>

        <Row className="d-flex align-items-center justify-content-center galleryRow">
          <Col className="projectGreen">
            <Row><h3>Reversi</h3></Row>
            <Row ><p>A game of Reversi that can be played in the terminal. Initially created for CS437. Uses the min max algorithm for the computer AI.TODO</p></Row>
            <Row ><p>Language: C#</p></Row>
          </Col>
          <Col className="justify-content-center">
            <a target="_blank" href="https://github.com/TomTheTornado/COMS437/tree/main/ReversiConsole" rel="noopener noreferrer"><img alt="Reversi Console" className="w-100 imgClick" src="./projects/reversiConsole.JPG"/></a>
          </Col>
        </Row>

        <Row className="d-flex align-items-center justify-content-center galleryRow">
          <Col className="justify-content-center"><a href="https://github.com/TomTheTornado/COMS327/tree/master/HW1_07" target="_blank" rel="noopener noreferrer"><img alt="Roguelike Dungeon Crawler" className="w-100 imgClick imgBorder" src="./projects/roguelikeDungeon.jpg"/></a></Col>
          <Col className="projectOrange">
            <Row><h3>Roguelike Dungeon Crawler</h3></Row>
            <Row ><p>A roguelike dungeon crawler created for ...TODO</p></Row>
            <Row ><p><i>Languages/Technologies:</i> C, C++</p></Row>
          </Col>
        </Row>

        <Row className="d-flex align-items-center justify-content-center galleryRow">
          <Col className="projectGreen">
            <Row><h3>ThreeJS Batsignal</h3></Row>
            <Row ><p>A batsignal I made for CS336 using ThreeJS ...TODO</p></Row>
            <Row ><p><i>Languages/Technologies:</i> Javascript, Three.js, HTML</p></Row>
          </Col>
          <Col className="justify-content-center"><a href="https://github.com/TomTheTornado/ThreeScene/tree/main/hw6" target="_blank" rel="noopener noreferrer"><img alt="Batsignal" className="w-100 imgClick" src="./projects/batSignal.JPG"/></a></Col>
        </Row>

        <Row className="d-flex align-items-center justify-content-center galleryRow">
          <Col className="justify-content-center"><a href="https://github.com/TomTheTornado/COMS437/tree/main/Project2" target="_blank" rel="noopener noreferrer"><img alt="Space Race Game" className="w-100 imgClick" src="./projects/spaceRace.jpg"/></a></Col>
          <Col className="projectOrange">
            <Row><h3>Space Race Game</h3></Row>
            <Row ><p>A roguelike dungeon crawler created for ...TODO</p></Row>
            <Row ><p><i>Languages/Technologies:</i> C#, Monogame, BEPUphysics</p></Row>
          </Col>
        </Row>
      </Container>
      <br/><br/><br/>
    </div>
  );
}

export default Projects;