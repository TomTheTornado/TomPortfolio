
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { courseData } from './courseData'

// import pdfResume from '/filename.pdf';

function Resume() {
  
  return (
    <div>
      <Container>
        <h1>Resume</h1>
        <Row className="d-flex justify-content-center">
          <embed type="application/pdf" src='./Thomas_Powell_Resume.pdf' className="w-75 resumePDF" height="1065px"/>
        </Row>
        <br/><br/>
        <Row className="d-flex justify-content-center">
          <a className="w-75" target="_blank" href="./Thomas_Powell_Resume.pdf" rel="noopener noreferrer"><button className="w-100">PDF not showing up? View here.</button></a>
        </Row>
        <br/><br/>
        <Row className="courseBG text-left">
          <Col>
            <Row><h2 className="courseHeading">Relevant Programming Coursework</h2></Row>
            {courseData.map((data, key) => {
              return (
                <Row className="coursePadding">
                  <Col>
                    <Row><h5>{data.courseName}</h5></Row>
                    <Row><i>Programming Languages Used:</i>&nbsp;&nbsp;{data.languages}</Row>
                    <Row>{data.term}</Row>
                  </Col>
                  <Col>{data.desc}<br/></Col>
                </Row>
              );
            })}
          </Col>
        </Row>
      </Container>
      <br/><br/>
    </div>
  );
}

export default Resume;