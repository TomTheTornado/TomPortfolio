
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function PageNotFound() {
  return (
    <Container className="d-flex align-items-center height404">
      <Col>
        <Row>
          <Col><img src='./error404.png' alt="404 Error Image"/></Col>
        </Row>
        <br/>
        <Row>
          <Col><h3>We searched around far and wide but couldn't find the page you wanted. Please check the URL, or use the navbar above.</h3></Col>
          
        </Row>
      </Col>
    </Container>

  );
}

export default PageNotFound;