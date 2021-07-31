import temp from '../profile.png';

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function Gallery() {
  return (
    <div>
      <Container>
        <h1>Gallery</h1>
        <p>This a place to see different works I've done of 3d modeling, 
          3d printing, and photography from my spare time. Have a look around!</p>
        <h2>3D Modeling</h2>
        <Row className="galleryRow d-flex align-items-center">
          <Col>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">Various swords from the videogame <i>The Legend of Zelda: Skyward Sword.</i></Tooltip>}>
              <span className="d-inline-block"><img src="./3d_modeling/ZeldaSwords.png" className="w-100"/></span>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">The "Harp" from the videogame <i>The Legend of Zelda: Skyward Sword.</i></Tooltip>}>
              <span className="d-inline-block"><img src="./3d_modeling/ZeldaHarp.png" className="w-100"/></span>
            </OverlayTrigger>
          </Col>
        </Row>
        <Row>
        <Col className="d-flex align-items-center">
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A low poly artwork inspired by the videogame <i>Portal 2.</i></Tooltip>}>
              <span className="d-inline-block"><img src="./3d_modeling/LowPolyPortal.png" className="w-100"/></span>
            </OverlayTrigger>
          </Col>
          <Col className="d-flex align-items-center">
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A low poly forest artwork I made as a background.</Tooltip>}>
              <span className="d-inline-block"><img src="./3d_modeling/LowPolyForest.png" className="w-100"/></span>
            </OverlayTrigger>
          </Col>
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