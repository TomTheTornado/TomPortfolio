import temp from '../profile.png';

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Gallery() {
  return (
    <div>
      <Container>
        <h1>Gallery</h1>
        <p>This a place to see different works I've done of 3d modeling, 
          3d printing, and photography from my spare time. Have a look around!</p>
        <h2>3D Modeling</h2>
        <Row>
          <Col><a href="URL" target="_blank" ><img src={temp} className="w-100"/></a></Col>
          <Col><img src={temp} className="w-100"/></Col>
          <Col><img src={temp} className="w-100"/></Col>
          <Col><img src={temp} className="w-100"/></Col>
        </Row>
        <h2>3D Printing</h2>
        <Row>
          <Col><img src={temp} className="w-100"/></Col>
          <Col><img src={temp} className="w-100"/></Col>
          <Col><img src={temp} className="w-100"/></Col>
          <Col><img src={temp} className="w-100"/></Col>
        </Row>
        <h2>Photography</h2>
        <Row>
          <Col><img src={temp} className="w-100"/></Col>
          <Col><img src={temp} className="w-100"/></Col>
          <Col><img src={temp} className="w-100"/></Col>
          <Col><img src={temp} className="w-100"/></Col>
        </Row>
        <Row>
          <Col><img src={temp} className="w-100"/></Col>
          <Col><img src={temp} className="w-100"/></Col>
          <Col><img src={temp} className="w-100"/></Col>
          <Col><img src={temp} className="w-100"/></Col>
        </Row>
        <Row>
          <Col><img src={temp} className="w-100"/></Col>
          <Col><img src={temp} className="w-100"/></Col>
          <Col><img src={temp} className="w-100"/></Col>
          <Col><img src={temp} className="w-100"/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Gallery;