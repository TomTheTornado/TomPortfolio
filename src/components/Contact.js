
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {AiOutlineGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {GoMail} from 'react-icons/go'

function Contact() {
  return (
    <div>
      <Container>
        <h1>Contact</h1>
        
        <div className="contactInfo">
          <Row className="contactSidePadding">
            <Col className="d-flex justify-content-center">
              Glad to see you've enjoyed the site enough to stumble onto this page. Feel free to contact me by sending an email to tksp98@gmail.com
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col>
              <Row className="d-flex justify-content-center"><GoMail size={50}/></Row>
              <Row className="d-flex justify-content-center">Email</Row>
              <Row className="d-flex justify-content-center"><a className="contactLink" href = "mailto:tksp98@gmail.com?subject=Nice%20Website">tksp98@gmail.com</a></Row>
            </Col>
            <Col>
              <Row className="d-flex justify-content-center"><AiOutlineGithub size={50}/></Row>
              <Row className="d-flex justify-content-center">Github</Row>
              <Row className="d-flex justify-content-center"><a className="contactLink" href="https://github.com/TomTheTornado" target="_blank" rel="noopener noreferrer">TomTheTornado</a></Row>
            </Col>
            <Col>
              <Row className="d-flex justify-content-center"><AiFillLinkedin size={50}/></Row>
              <Row className="d-flex justify-content-center">LinkedIn</Row>
              <Row className="d-flex justify-content-center"><a className="contactLink" href="https://www.linkedin.com/in/thomaskpowell/" target="_blank" rel="noopener noreferrer">Thomas&nbsp;Powell</a></Row>
            </Col>
          </Row>
          <br/>
        </div>
      </Container>
      <br/><br/><br/>
    </div>
  );
}

export default Contact;