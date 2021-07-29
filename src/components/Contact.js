
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
        
        <Row>
          <Col className="d-flex justify-content-center">
            Glad to see you've enjoyed the site enough to stumble onto this page. Feel free to contact me by sending an email to tksp98@gmail.com
          </Col>
        </Row>
        <Row>
          <Col>
            <GoMail size={50}/><a href = "mailto:tksp98@gmail.com?subject=Nice%20Website">tksp98@gmail.com</a>
          </Col>
          <Col>
            <AiOutlineGithub size={50} /><a href="https://github.com/TomTheTornado" target="_blank" rel="noopener noreferrer">TomTheTornado</a>
          </Col>
          <Col>
            <AiFillLinkedin size={50} /><a href="https://www.linkedin.com/in/thomaskpowell/" target="_blank" rel="noopener noreferrer">Thomas&nbsp;Powell</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;