
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

// import pdfResume from '/filename.pdf';

function Resume() {
  
  return (
    <Container>
      <h1>Resume</h1>
      <embed id="pdf" src='./filename.pdf' className="w-75" height="930px"/>
      <Row>
      </Row>
      <Row>
        <p>For a more in-depth look at my work and experience, look below.</p>
        Work Experience
      </Row>
      <br/>
      <Row>
        Relevant Coursework
      </Row>
    </Container>
  );
}

export default Resume;