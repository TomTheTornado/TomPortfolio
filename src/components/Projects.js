
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
          <Col className="justify-content-center">
          <a href="https://github.com/TomTheTornado/Boss-Fight-Battleground" target="_blank" rel="noopener noreferrer"><img alt="Boss Fight Battlegrounds" className="w-100 imgClick" src="./projects/BFB.JPG"/></a>
          </Col>
          <Col className="projectOrange">
            <Row><h3>Boss Fight Battlegrounds</h3></Row>
            <Row ><p>A 2D multiplayer side scrolling action game created with the Monogame framework. The monogame framework was chosen as it provides us with 2 major things: the game loop and a way to render the game sprites. I worked in a team of 4 for Com S 309. We had a working game at the end of the semester and built the game engine essentially from scratch. The project was voted #1 out of 78 projects. </p></Row>
            <Row ><p><i>Languages/Technologies:</i> C#, Monogame</p></Row>
          </Col>
        </Row>

        <Row className="d-flex align-items-center justify-content-center galleryRow">
          <Col className="projectGreen">
            <Row><h3>Sprite Creator</h3></Row>
            <Row ><p>A website for creating pixel art and animations. The ability to draw is due to the HTML canvas. Different tools were implemented to be able to effectively edit the sprites. This project was in groups of 2 for Com S 319. The projects was voted #2 out of 86 projects.</p></Row>
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
            <Row ><p>A game of Sudoku that can be played in the terminal. Initially created for Com S 327 as a "choose your own assignment." I chose sudoku so I could figure out how to generate the puzzle and create clear board navigation.</p></Row>
            <Row ><p><i>Languages/Technologies:</i> C++</p></Row>
          </Col>
        </Row>

        <Row className="d-flex align-items-center justify-content-center galleryRow">
          <Col className="projectGreen">
            <Row><h3>Reversi</h3></Row>
            <Row ><p>A game of Reversi that can be played in the terminal. Initially created for Com S 437. Uses the minimax algorithm for the computer AI.</p></Row>
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
            <Row ><p>A roguelike dungeon crawler created for Com S 327. This project incrementally added new features weekly. Project was maintained throughout the semester and had to be converted from C to C++.</p></Row>
            <Row ><p><i>Languages/Technologies:</i> C, C++</p></Row>
          </Col>
        </Row>

        <Row className="d-flex align-items-center justify-content-center galleryRow">
          <Col className="projectGreen">
            <Row><h3>ThreeJS Batsignal</h3></Row>
            <Row ><p>A batsignal I made in CS336 using Three.js. I created some of the models used in the scene myself. I used heirarchy so the batsignal moved together as it is composed of 6 different shapes. Three.js definitely was fun to experiment with and build this scene in its entirety.</p></Row>
            <Row ><p><i>Languages/Technologies:</i> Javascript, Three.js, HTML</p></Row>
          </Col>
          <Col className="justify-content-center"><a href="https://github.com/TomTheTornado/ThreeScene/tree/main/hw6" target="_blank" rel="noopener noreferrer"><img alt="Batsignal" className="w-100 imgClick" src="./projects/batSignal.JPG"/></a></Col>
        </Row>

        <Row className="d-flex align-items-center justify-content-center galleryRow">
          <Col className="justify-content-center"><a href="https://github.com/TomTheTornado/COMS437/tree/main/Project2" target="_blank" rel="noopener noreferrer"><img alt="Space Race Game" className="w-100 imgClick" src="./projects/spaceRace.jpg"/></a></Col>
          <Col className="projectOrange">
            <Row><h3>Space Race Game</h3></Row>
            <Row ><p>A 3D space race game built in Monogame using BEPUphysics. The goal is to fly the spaceship through the rings to get the highest score possible. I balanced the game in a way that flying through all the rings in the fastest time will net the highest score.</p></Row>
            <Row ><p><i>Languages/Technologies:</i> C#, Monogame, BEPUphysics</p></Row>
          </Col>
        </Row>
      </Container>
      <br/><br/><br/>
    </div>
  );
}

export default Projects;