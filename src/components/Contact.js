
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Contact() {
  return (
    <div>
      <Container>
        <h1>Contact Me</h1>
        <p>To contact me you can send me an email with tksp98@gmail.com</p>
        <p>Maybe Form for email</p>
        <Row>
          <Col>Github</Col>
          <Col>LinkedIn</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;