//import logo from './logo.svg';
//import './App.css';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {AiOutlineGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {GoMail} from 'react-icons/go'

function Footer() {
  return (
    <div className="footerBG">
      <Container className="footerContent">
        <Row className="d-flex align-items-center justify-content-center">
          <Col className="col-sm-3 d-flex justify-content-center">
            <a className="iconLink" href = "mailto:tksp98@gmail.com?subject=Nice%20Website" title="Email, so you can send me a message."><GoMail size={60}/></a>
          </Col>
          <Col className="col-sm-3 d-flex justify-content-center">
            <a className="iconLink" href="https://github.com/TomTheTornado" target="_blank" rel="noopener noreferrer" title="Github, so you can see my project repos."><AiOutlineGithub size={55} /></a>
          </Col>
          <Col className="col-sm-3 d-flex justify-content-center">
            <a className="iconLink" href="https://www.linkedin.com/in/thomaskpowell/" target="_blank" rel="noopener noreferrer" title="LinkedIn, so we can connect and expand our networks."><AiFillLinkedin size={55} /></a>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col><b className="d-flex align-items-center justify-content-center copyright">Copyright © 2021 Thomas&nbsp;Powell</b></Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default Footer;