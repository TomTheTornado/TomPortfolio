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
        <Row className="d-flex align-items-center galleryGreenInfo">
          This a place to see different works I've done of 3d modeling, 3d printing, and photography from my spare time. Have a look around!
          TODO - give alt names
        </Row>
        
        <h2 className="galleryOrangeInfo">3D Modeling</h2>
        <Row className="galleryRow d-flex align-items-center">
          <Col className="d-flex align-items-center">
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A low poly artwork inspired by the videogame <i>Portal 2.</i></Tooltip>}>
              <span className="d-inline-block"><img src="./3d_modeling/LowPolyPortal.png" className="w-100"/></span>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">Various swords from the videogame <i>The Legend of Zelda: Skyward Sword.</i></Tooltip>}>
              <span className="d-inline-block"><img src="./3d_modeling/ZeldaSwords.png" className="w-100"/></span>
            </OverlayTrigger>
          </Col>
        </Row>
        <Row className="galleryRow d-flex align-items-center">
          <Col>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">The "Harp" from the videogame <i>The Legend of Zelda: Skyward Sword.</i></Tooltip>}>
              <span className="d-inline-block"><img src="./3d_modeling/ZeldaHarp.png" className="w-100"/></span>
            </OverlayTrigger>
          </Col>
          <Col className="d-flex align-items-center">
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A low poly forest artwork I made as a background.</Tooltip>}>
              <span className="d-inline-block"><img src="./3d_modeling/LowPolyForest.png" className="w-100"/></span>
            </OverlayTrigger>
          </Col>
        </Row>
        <Row className="galleryRow d-flex align-items-center">
          <Col>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">Interesting cubes that are floating around to make a neat background.</Tooltip>}>
              <span className="d-inline-block"><img src="./3d_modeling/SpaceCubes.png" className="w-100"/></span>
            </OverlayTrigger>
          </Col>
          <Col className="d-flex align-items-center">
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A modeling experiment using a "spaceship ramp" to use minor cel-shading and testing the outline feature in Blender.</Tooltip>}>
              <span className="d-inline-block"><img src="./3d_modeling/SpaceRamp.png" className="w-100"/></span>
            </OverlayTrigger>
          </Col>
        </Row>
        <Row className="galleryRow d-flex align-items-center">
          <Col className="d-flex align-items-center">
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A farm I modeled for use in my high school Ag Science II class. I divided the land to make space for soybeans, corn, crops for hay, and livestock.</Tooltip>}>
              <span className="d-inline-block"><img src="./3d_modeling/FarmMap.png" className="w-100"/></span>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A robot I modeled that took some inspiration from the Android robot.</Tooltip>}>
              <span className="d-inline-block"><img src="./3d_modeling/AndroidRobot.png" className="w-100"/></span>
            </OverlayTrigger>
          </Col>
        </Row>
        <Row className="galleryRow d-flex align-items-center">
          <Col className="d-flex align-items-center">
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">I wanted to model a cool background using only cubes which resulted in this scene.</Tooltip>}>
              <span className="d-inline-block"><img src="./3d_modeling/CubeBackground.png" className="w-100"/></span>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">One of the earliest things I did with Blender was following along a tutorial to simulate cloth placed over a glass bowl.</Tooltip>}>
              <span className="d-inline-block"><img src="./3d_modeling/ClothBowl.png" className="w-100"/></span>
            </OverlayTrigger>
          </Col>
        </Row>
        

        <h2 className="galleryGreenInfo">3D Printing</h2>
        <Row className="galleryRow d-flex align-items-center">
          <Col className="d-flex align-items-center">
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A 3D printed "Goddess Sword" from the videogame <i>The Legend of Zelda: Skyward Sword.</i></Tooltip>}>
              <span className="d-inline-block"><img src="./3d_printing/GoddessSword.jpg" className="w-100"/></span>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A 3D printed "Goddess Longsword" from the videogame <i>The Legend of Zelda: Skyward Sword.</i></Tooltip>}>
              <span className="d-inline-block"><img src="./3d_printing/GoddessLongsword.jpg" className="w-100"/></span>
            </OverlayTrigger>
          </Col>
        </Row>
        <Row className="galleryRow d-flex align-items-center">
          <Col className="d-flex align-items-center">
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A 3D printed "Master Sword" from the videogame <i>The Legend of Zelda: Skyward Sword.</i></Tooltip>}>
              <span className="d-inline-block"><img src="./3d_printing/MasterSword.jpg" className="w-100"/></span>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A 3D printed "True Master Sword" from the videogame <i>The Legend of Zelda: Skyward Sword.</i></Tooltip>}>
              <span className="d-inline-block"><img src="./3d_printing/TrueMasterSword.jpg" className="w-100"/></span>
            </OverlayTrigger>
          </Col>
        </Row>
        <Row className="galleryRow d-flex align-items-center">
          <Col>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A 3D printed and painted "Goddess Longsword" from the videogame <i>The Legend of Zelda: Skyward Sword.</i></Tooltip>}>
              <span className="d-inline-block"><img src="./3d_printing/GoddessLongswordPainted.jpg" className="w-100"/></span>
            </OverlayTrigger>
          </Col>
          <Col className="d-flex align-items-center">
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">Various swords lined up from the videogame <i>The Legend of Zelda: Skyward Sword.</i></Tooltip>}>
              <span className="d-inline-block"><img src="./3d_printing/AllSwords.jpg" className="w-100"/></span>
            </OverlayTrigger>
          </Col>
        </Row>
        
        <h2 className="galleryOrangeInfo">Photography</h2>
        <Row className="galleryRow d-flex align-items-center">
          <Col>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A gas pump amid the winter snowfall.</Tooltip>}>
              <span className="d-inline-block"><img src="./photography/GasPump.JPG" className="w-100"/></span>
            </OverlayTrigger>
          </Col>
          <Col className="d-flex align-items-center">
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A close-up road sign that show the imperfections and cracks after years of constant weathering.</Tooltip>}>
              <span className="d-inline-block"><img src="./photography/RoadSign.JPG" className="w-100"/></span>
            </OverlayTrigger>
          </Col>
        </Row>
        <Row className="galleryRow d-flex align-items-center">
          <Col className="d-flex align-items-center">
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A sign to the City Creek Mall in Salt Lake City with various shadows being cast.</Tooltip>}>
              <span className="d-inline-block"><img src="./photography/CityShadows.JPG" className="w-100"/></span>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">The handle to the gas pump with snowflakes falling all around.</Tooltip>}>
              <span className="d-inline-block"><img src="./photography/GasPumpHandle.JPG" className="w-100"/></span>
            </OverlayTrigger>
          </Col>
        </Row>
        <Row className="galleryRow d-flex align-items-center">
          <Col className="d-flex align-items-center">
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A close up look on an icicle with a cloudy winter sky.</Tooltip>}>
              <span className="d-inline-block"><img src="./photography/Icicle.JPG" className="w-100"/></span>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A close up on the weathered grill logo after some flurries.</Tooltip>}>
              <span className="d-inline-block"><img src="./photography/Grill.JPG" className="w-100"/></span>
            </OverlayTrigger>
          </Col>
        </Row>
        <Row className="galleryRow d-flex align-items-center">
          <Col className="d-flex align-items-center">
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A direct look at a fence sticker with clinging snow.</Tooltip>}>
              <span className="d-inline-block"><img src="./photography/Fence.JPG" className="w-100"/></span>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">Snow falling delicately over a tree branch.</Tooltip>}>
              <span className="d-inline-block"><img src="./photography/FallingSnow.JPG" className="w-100"/></span>
            </OverlayTrigger>
          </Col>
        </Row>
        <Row className="galleryRow d-flex align-items-center">
          <Col className="d-flex align-items-center">
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A pigeon overlooking the environment from atop of a grain bin.</Tooltip>}>
              <span className="d-inline-block"><img src="./photography/Pigeon.JPG" className="w-100"/></span>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A still focus on the falling snowflakes with a softened background of a barn.</Tooltip>}>
              <span className="d-inline-block"><img src="./photography/BarnSnow.JPG" className="w-100"/></span>
            </OverlayTrigger>
          </Col>
        </Row>
        <Row className="galleryRow d-flex align-items-center">
          <Col className="d-flex align-items-center">
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A small candle contrasting the texture of the dark wood grain.</Tooltip>}>
              <span className="d-inline-block"><img src="./photography/Candle.JPG" className="w-100"/></span>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A close view of a dust covered Subaru Outback with light snow atop the lettering.</Tooltip>}>
              <span className="d-inline-block"><img src="./photography/Outback.JPG" className="w-100"/></span>
            </OverlayTrigger>
          </Col>
        </Row>
        <Row className="galleryRow d-flex align-items-center">
          <Col className="d-flex align-items-center">
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">The underside look towards the top of an electric pole.</Tooltip>}>
              <span className="d-inline-block"><img src="./photography/ElectricPole.JPG" className="w-100"/></span>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A lion statue outside the Utah Capitol Building in Salt Lake City.</Tooltip>}>
              <span className="d-inline-block"><img src="./photography/LionCapitol.jpg" className="w-100"/></span>
            </OverlayTrigger>
          </Col>
        </Row>
        <Row className="galleryRow d-flex align-items-center">
          <Col className="d-flex align-items-center">
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">The tips of a walnut tree with the moon in the background.</Tooltip>}>
              <span className="d-inline-block"><img src="./photography/WalnutMoon.JPG" className="w-100"/></span>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">In-focus water drops clinging to the side of a mirror.</Tooltip>}>
              <span className="d-inline-block"><img src="./photography/Mirror.JPG" className="w-100"/></span>
            </OverlayTrigger>
          </Col>
        </Row>
        <Row className="galleryRow d-flex align-items-center">
          <Col className="d-flex align-items-center">
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">The view of clouds and airplane trails at dusk.</Tooltip>}>
              <span className="d-inline-block"><img src="./photography/SunsetClouds.JPG" className="w-100"/></span>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A couple of pigeons flapping around mid-flight.</Tooltip>}>
              <span className="d-inline-block"><img src="./photography/PigeonFlight.JPG" className="w-100"/></span>
            </OverlayTrigger>
          </Col>
        </Row>
        <Row className="galleryRow d-flex align-items-center">
          <Col className="d-flex align-items-center">
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A series of statues taken throughout Chicago. Edited in a way that is reminiscent of the Andy Worhol style.</Tooltip>}>
              <span className="d-inline-block"><img src="./photography/AndyWorholStatues.JPG" className="w-100"/></span>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">Bubbles in a water bottle with a vibrant array of colors in the background.</Tooltip>}>
              <span className="d-inline-block"><img src="./photography/WaterBottle.JPG" className="w-100"/></span>
            </OverlayTrigger>
          </Col>
        </Row>
      </Container>
      <br/><br/><br/>
    </div>
  );
}

export default Gallery;