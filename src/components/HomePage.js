//import './App.css';
import '../index.css';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <Container>
          <h1>WELCOME!</h1>
          <Row>
              <Col><img className="w-100" src='./profilePic.png'></img></Col>
              <Col className="d-flex align-items-center">Hello there and welcome to my website. I made this site as a react app using HTML and CSS, as well as react-bootstrap to help with formatting. This porfolio is deployed using github pages. My experience with web development is primarily self taught. I made this website to showcase my skills and list my abilities.</Col>
          </Row>
          <Row className="homeInfo">
            <h2>About Me</h2>
            <p>
              My name is Thomas, but you may have gathered that already. I recently graduated from Iowa State University in 2021 with a 
              bachelor’s degree in software engineering. Having grown up on a farm near a small town of 1200 in northeast Iowa, I enjoyed 
              the chance when I could interact with computers and take a look at the world with a different perspective. So I would love 
              to have a part in creating software that can positively impact people’s lives.
              <br/><br/>
              My focus is primarily on software development, but I understand that the field of software and computer science is very broad 
              so I’m eager to learn other skills and abilities along the way. I’ve found throughout my programming experience so far that I 
              like dealing with things that I can visually see a difference in, whether that be web design (not unlike this one) or creating 
              game sprites to making them move.
              <br/><br/>
              I have different strengths and abilities that I have picked up throughout the years from previous work, school, and personal 
              experiences. However, you can read more about that on the other pages included on this website. Below you will find a summary 
              on what each page on the site has in store. Anyway, have a look around and enjoy the website!
            </p>
          </Row>
          <div className="altBackground">
            <Row><h2 className="h2pad">Where to go from here...</h2></Row>
            <Row className="buttonInfo d-flex align-items-center justify-content-center">
              <Col className="">Click on the button to the right if you want to check out my skillset, experience, and resume.</Col>
              <Col>
                <Link to='/resume'><button className="w-75">Resume</button></Link>
              </Col>
            </Row>
            <Row className="buttonInfo d-flex align-items-center justify-content-center">
              <Col>If you're interested in seeing some of the projects I've worked on over the years, feel free to take a look here.</Col>
              <Col>
                <Link to='/projects'><button className="w-75">Projects</button></Link>
              </Col>
            </Row>
            <Row className="buttonInfo d-flex align-items-center justify-content-center">
              <Col>Checkout some of the different artwork and pictures in the gallery.</Col>
              <Col>
                <Link to='/gallery'><button className="w-75">Gallery</button></Link>
              </Col>
            </Row>
            <Row className="buttonInfo d-flex align-items-center justify-content-center">
              <Col>Interested in sending a message my way? Click here.</Col>
              <Col>
                <Link to='/contact'><button className="w-75">Contact</button></Link>
              </Col>
            </Row>
          </div>
      </Container>
    </div>
  );
}

export default HomePage;