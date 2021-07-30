
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { courseData } from './courseData'

// import pdfResume from '/filename.pdf';

function Resume() {
  
  return (
    <Container>
      <h1>Resume</h1>
      <embed type="application/pdf" src='./filename.pdf' className="w-75 resumePDF" height="1065px"/>
      <Row>
      </Row>
      <br/>

      <Row className="courseBG text-left">
        <Col>
          <h2>Relevant Programming Coursework</h2>
          {courseData.map((data, key) => {
            return (
              <Row>
                <Col>
                  <Row><h5>{data.courseName}</h5></Row>
                  <Row><i>Programming Languages Used:</i>&nbsp;{data.skills}</Row>
                  <Row>{data.term}</Row>
                  <br/>
                </Col>
                <Col>{data.desc}</Col>
              </Row>
            );
          })}
        </Col>
      </Row>


    </Container>
  );
}

export default Resume;