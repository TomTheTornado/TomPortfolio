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
          This a place to see different works I've done of 3d modeling, 3d printing, and photography from my spare time. You can click on each image for a closer look. Have a look around!
        </Row>
        
        <h2 className="galleryOrangeInfo">3D Modeling</h2>
        <Row className="galleryRow d-flex align-items-center">
          <Col className="d-flex align-items-center">
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A low poly artwork inspired by the videogame <i>Portal 2.</i></Tooltip>}>
              <span className="d-inline-block">
                <a target="_blank" href="./3d_modeling/LowPolyPortal.png" rel="noopener noreferrer"><img alt="Low Poly Portal Chamber" src="./3d_modeling/thumbnail/tmbLowPolyPortal.jpg" className="w-100 imgClick"/></a>
              </span>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">Various swords from the videogame <i>The Legend of Zelda: Skyward Sword.</i></Tooltip>}>
              <span className="d-inline-block">
                <a target="_blank" href="./3d_modeling/ZeldaSwords.png" rel="noopener noreferrer"><img alt="Various Zelda Swords" src="./3d_modeling/thumbnail/tmbZeldaSwords.jpg" className="w-100 imgClick"/></a>
              </span>
            </OverlayTrigger>
          </Col>
        </Row>
        <Row className="galleryRow d-flex align-items-center">
          <Col>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">The "Harp" from the videogame <i>The Legend of Zelda: Skyward Sword.</i></Tooltip>}>
              <span className="d-inline-block">
              <a target="_blank" href="./3d_modeling/ZeldaHarp.png" rel="noopener noreferrer"><img alt="Zelda Harp" src="./3d_modeling/thumbnail/tmbZeldaHarp.jpg" className="w-100 imgClick"/></a>
              </span>
            </OverlayTrigger>
          </Col>
          <Col className="d-flex align-items-center">
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A low poly forest artwork I made as a background.</Tooltip>}>
              <span className="d-inline-block">                <a target="_blank" href="./3d_modeling/LowPolyForest.png" rel="noopener noreferrer"><img alt="Low Poly Forest" src="./3d_modeling/thumbnail/tmbLowPolyForest.jpg" className="w-100 imgClick"/></a></span>
            </OverlayTrigger>
          </Col>
        </Row>
        <Row className="galleryRow d-flex align-items-center">
          <Col>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">Interesting cubes that are floating around to make a neat background.</Tooltip>}>
              <span className="d-inline-block">                <a target="_blank" href="./3d_modeling/SpaceCubes.png" rel="noopener noreferrer"><img alt="Space Cube Background" src="./3d_modeling/thumbnail/tmbSpaceCubes.jpg" className="w-100 imgClick"/></a></span>
            </OverlayTrigger>
          </Col>
          <Col className="d-flex align-items-center">
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A modeling experiment using a "spaceship ramp" to use minor cel-shading and testing the outline feature in Blender.</Tooltip>}>
              <span className="d-inline-block">                <a target="_blank" href="./3d_modeling/SpaceRamp.png" rel="noopener noreferrer"><img alt="Space Ramp" src="./3d_modeling/thumbnail/tmbSpaceRamp.jpg" className="w-100 imgClick"/></a></span>
            </OverlayTrigger>
          </Col>
        </Row>
        <Row className="galleryRow d-flex align-items-center"> 
          <Col className="d-flex align-items-center">
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A farm I modeled for use in my high school Ag Science II class. I divided the land to make space for soybeans, corn, crops for hay, and livestock.</Tooltip>}>
              <span className="d-inline-block">                <a target="_blank" href="./3d_modeling/FarmMap.png" rel="noopener noreferrer"><img alt="3D Farm Map" src="./3d_modeling/thumbnail/tmbFarmMap.jpg" className="w-100 imgClick"/></a></span>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A robot I modeled that took some inspiration from the Android robot.</Tooltip>}>
              <span className="d-inline-block">                <a target="_blank" href="./3d_modeling/AndroidRobot.png" rel="noopener noreferrer"><img alt="Android Inspired Robot" src="./3d_modeling/thumbnail/tmbAndroidRobot.jpg" className="w-100 imgClick"/></a></span>
            </OverlayTrigger>
          </Col>
        </Row>
        <Row className="galleryRow d-flex align-items-center">
          <Col className="d-flex align-items-center">
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">I wanted to model a cool background using only cubes which resulted in this scene.</Tooltip>}>
              <span className="d-inline-block">                <a target="_blank" href="./3d_modeling/CubeBackground.png" rel="noopener noreferrer"><img alt="Cube Background" src="./3d_modeling/thumbnail/tmbCubeBackground.jpg" className="w-100 imgClick"/></a></span>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">One of the earliest things I did with Blender was following along a tutorial to simulate cloth placed over a glass bowl.</Tooltip>}>
              <span className="d-inline-block">                <a target="_blank" href="./3d_modeling/ClothBowl.png" rel="noopener noreferrer"><img alt="Cloth Bowl" src="./3d_modeling/thumbnail/tmbClothBowl.jpg" className="w-100 imgClick"/></a></span>
            </OverlayTrigger>
          </Col>
        </Row>
        

        <h2 className="galleryGreenInfo">3D Printing</h2>
        <Row className="galleryRow d-flex align-items-center">
          <Col className="d-flex align-items-center">
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A 3D printed "Goddess Sword" from the videogame <i>The Legend of Zelda: Skyward Sword.</i></Tooltip>}>
              <span className="d-inline-block">
                <a target="_blank" href="./3d_printing/GoddessSword.jpg" rel="noopener noreferrer"><img alt="Zelda Goddess Sword" src="./3d_printing/thumbnail/tmbGoddessSword.jpg" className="w-100 imgClick"/></a>
              </span>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A 3D printed "Goddess Longsword" from the videogame <i>The Legend of Zelda: Skyward Sword.</i></Tooltip>}>
              <span className="d-inline-block">
                <a target="_blank" href="./3d_printing/GoddessLongsword.jpg" rel="noopener noreferrer"><img alt="Zelda Goddess Longsword" src="./3d_printing/thumbnail/tmbGoddessLongsword.jpg" className="w-100 imgClick"/></a>
              </span>
            </OverlayTrigger>
          </Col>
        </Row>
        <Row className="galleryRow d-flex align-items-center">
          <Col className="d-flex align-items-center">
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A 3D printed "Master Sword" from the videogame <i>The Legend of Zelda: Skyward Sword.</i></Tooltip>}>
              <span className="d-inline-block">                <a target="_blank" href="./3d_printing/MasterSword.jpg" rel="noopener noreferrer"><img alt="Zelda Master Sword" src="./3d_printing/thumbnail/tmbMasterSword.jpg" className="w-100 imgClick"/></a></span>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A 3D printed "True Master Sword" from the videogame <i>The Legend of Zelda: Skyward Sword.</i></Tooltip>}>
              <span className="d-inline-block">                <a target="_blank" href="./3d_printing/TrueMasterSword.jpg" rel="noopener noreferrer"><img alt="Zelda True Master Sword" src="./3d_printing/thumbnail/tmbTrueMasterSword.jpg" className="w-100 imgClick"/></a></span>
            </OverlayTrigger>
          </Col>
        </Row>
        <Row className="galleryRow d-flex align-items-center">
          <Col>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A 3D printed and painted "Goddess Longsword" from the videogame <i>The Legend of Zelda: Skyward Sword.</i></Tooltip>}>
              <span className="d-inline-block">                
                <a target="_blank" href="./3d_printing/GoddessLongswordPainted.jpg" rel="noopener noreferrer"><img alt="Painted Sword" src="./3d_printing/thumbnail/tmbGoddessLongswordPainted.jpg" className="w-100 imgClick"/></a>
              </span>
            </OverlayTrigger>
          </Col>
          <Col className="d-flex align-items-center">
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">Various swords lined up from the videogame <i>The Legend of Zelda: Skyward Sword.</i></Tooltip>}>
              <span className="d-inline-block">
                <a target="_blank" href="./3d_printing/AllSwords.jpg" rel="noopener noreferrer"><img alt="Legend of Zelda Swords" src="./3d_printing/thumbnail/tmbAllSwords.jpg" className="w-100 imgClick"/></a>  
              </span>
            </OverlayTrigger>
          </Col>
        </Row>
        
        <h2 className="galleryOrangeInfo">Photography</h2>
        <Row className="galleryRow d-flex align-items-center">
          <Col>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A gas pump amid the winter snowfall.</Tooltip>}>
              <span className="d-inline-block">
                <a target="_blank" href="./photography/GasPump.JPG" rel="noopener noreferrer"><img alt="Snowy Gas Pump" src="./photography/thumbnail/tmbGasPump.JPG" className="w-100 imgClick"/></a>
              </span>
            </OverlayTrigger>
          </Col>
          <Col className="d-flex align-items-center">
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A close-up road sign that show the imperfections and cracks after years of constant weathering.</Tooltip>}>
            <span className="d-inline-block">
                <a target="_blank" href="./photography/RoadSign.JPG" rel="noopener noreferrer"><img alt="Cracked Road Sign" src="./photography/thumbnail/tmbRoadSign.JPG" className="w-100 imgClick"/></a>
              </span>
            </OverlayTrigger>
          </Col>
        </Row>
        <Row className="galleryRow d-flex align-items-center">
          <Col className="d-flex align-items-center">
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A sign to the City Creek Mall in Salt Lake City with various shadows being cast.</Tooltip>}>
            <span className="d-inline-block">
                <a target="_blank" href="./photography/CityShadows.JPG" rel="noopener noreferrer"><img alt="Shadows on Buildings" src="./photography/thumbnail/tmbCityShadows.JPG" className="w-100 imgClick"/></a>
              </span>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">The handle to the gas pump with snowflakes falling all around.</Tooltip>}>
            <span className="d-inline-block">
                <a target="_blank" href="./photography/GasPumpHandle.JPG" rel="noopener noreferrer"><img alt="Snowy Gas Pump Handle" src="./photography/thumbnail/tmbGasPumpHandle.JPG" className="w-100 imgClick"/></a>
              </span>
            </OverlayTrigger>
          </Col>
        </Row>
        <Row className="galleryRow d-flex align-items-center">
          <Col className="d-flex align-items-center">
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A close up look on an icicle with a cloudy winter sky.</Tooltip>}>
            <span className="d-inline-block">
                <a target="_blank" href="./photography/Icicle.JPG" rel="noopener noreferrer"><img alt="Icicle" src="./photography/thumbnail/tmbIcicle.JPG" className="w-100 imgClick"/></a>
              </span>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A close up on the weathered grill logo after some flurries.</Tooltip>}>
            <span className="d-inline-block">
                <a target="_blank" href="./photography/Grill.JPG" rel="noopener noreferrer"><img alt="Snowy Grill" src="./photography/thumbnail/tmbGrill.JPG" className="w-100 imgClick"/></a>
              </span>
            </OverlayTrigger>
          </Col>
        </Row>
        <Row className="galleryRow d-flex align-items-center">
          <Col className="d-flex align-items-center">
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A direct look at a fence sticker with clinging snow.</Tooltip>}>
            <span className="d-inline-block">
                <a target="_blank" href="./photography/Fence.JPG" rel="noopener noreferrer"><img alt="Snowy Fence" src="./photography/thumbnail/tmbFence.JPG" className="w-100 imgClick"/></a>
              </span>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">Snow falling delicately over a tree branch.</Tooltip>}>
            <span className="d-inline-block">
                <a target="_blank" href="./photography/FallingSnow.JPG" rel="noopener noreferrer"><img alt="Snowy Tree Branch" src="./photography/thumbnail/tmbFallingSnow.JPG" className="w-100 imgClick"/></a>
              </span>
            </OverlayTrigger>
          </Col>
        </Row>
        <Row className="galleryRow d-flex align-items-center">
          <Col className="d-flex align-items-center">
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A pigeon overlooking the environment from atop of a grain bin.</Tooltip>}>
            <span className="d-inline-block">
                <a target="_blank" href="./photography/Pigeon.JPG" rel="noopener noreferrer"><img alt="Still Pigeon" src="./photography/thumbnail/tmbPigeon.JPG" className="w-100 imgClick"/></a>
              </span>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A still focus on the falling snowflakes with a softened background of a barn.</Tooltip>}>
            <span className="d-inline-block">
                <a target="_blank" href="./photography/BarnSnow.JPG" rel="noopener noreferrer"><img alt="Barn with Snow" src="./photography/thumbnail/tmbBarnSnow.JPG" className="w-100 imgClick"/></a>
              </span>
            </OverlayTrigger>
          </Col>
        </Row>
        <Row className="galleryRow d-flex align-items-center">
          <Col className="d-flex align-items-center">
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A small candle contrasting the texture of the dark wood grain.</Tooltip>}>
            <span className="d-inline-block">
                <a target="_blank" href="./photography/Candle.JPG" rel="noopener noreferrer"><img alt="Small Candle" src="./photography/thumbnail/tmbCandle.JPG" className="w-100 imgClick"/></a>
              </span>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A close view of a dust covered Subaru Outback with light snow atop the lettering.</Tooltip>}>
            <span className="d-inline-block">
                <a target="_blank" href="./photography/Outback.JPG" rel="noopener noreferrer"><img  alt="Snowy and Dusty Outback Lettering" src="./photography/thumbnail/tmbOutback.JPG" className="w-100 imgClick"/></a>
              </span>
            </OverlayTrigger>
          </Col>
        </Row>
        <Row className="galleryRow d-flex align-items-center">
          <Col className="d-flex align-items-center">
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">The underside look towards the top of an electric pole.</Tooltip>}>
            <span className="d-inline-block">
                <a target="_blank" href="./photography/ElectricPole.JPG" rel="noopener noreferrer"><img alt="Electric Pole Underside" src="./photography/thumbnail/tmbElectricPole.JPG" className="w-100 imgClick"/></a>
              </span>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A lion statue outside the Utah Capitol Building in Salt Lake City.</Tooltip>}>
            <span className="d-inline-block">
                <a target="_blank" href="./photography/LionCapitol.jpg" rel="noopener noreferrer"><img alt="Lion Statue at a Capitol Building" src="./photography/thumbnail/tmbLionCapitol.jpg" className="w-100 imgClick"/></a>
              </span>
            </OverlayTrigger>
          </Col>
        </Row>
        <Row className="galleryRow d-flex align-items-center">
          <Col className="d-flex align-items-center">
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">The tips of a walnut tree with the moon in the background.</Tooltip>}>
            <span className="d-inline-block">
                <a target="_blank" href="./photography/WalnutMoon.JPG" rel="noopener noreferrer"><img alt="Walnut Tree Branch and Moon" src="./photography/thumbnail/tmbWalnutMoon.JPG" className="w-100 imgClick"/></a>
              </span>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">In-focus water drops clinging to the side of a mirror.</Tooltip>}>
            <span className="d-inline-block">
                <a target="_blank" href="./photography/Mirror.JPG" rel="noopener noreferrer"><img alt="Mirror with Water Drops" src="./photography/thumbnail/tmbMirror.JPG" className="w-100 imgClick"/></a>
              </span>
            </OverlayTrigger>
          </Col>
        </Row>
        <Row className="galleryRow d-flex align-items-center">
          <Col className="d-flex align-items-center">
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">The view of clouds and airplane trails at dusk.</Tooltip>}>
            <span className="d-inline-block">
                <a target="_blank" href="./photography/SunsetClouds.JPG" rel="noopener noreferrer"><img alt="Clouds at Dusk" src="./photography/thumbnail/tmbSunsetClouds.JPG" className="w-100 imgClick"/></a>
              </span>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A couple of pigeons flapping around mid-flight.</Tooltip>}>
            <span className="d-inline-block">
                <a target="_blank" href="./photography/PigeonFlight.JPG" rel="noopener noreferrer"><img alt="Pigeons in Flight" src="./photography/thumbnail/tmbPigeonFlight.JPG" className="w-100 imgClick"/></a>
              </span>
            </OverlayTrigger>
          </Col>
        </Row>
        <Row className="galleryRow d-flex align-items-center">
          <Col className="d-flex align-items-center">
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">A series of statues taken throughout Chicago. Edited in a way that is reminiscent of the Andy Worhol style.</Tooltip>}>
            <span className="d-inline-block">
                <a target="_blank" href="./photography/AndyWorholStatues.JPG" rel="noopener noreferrer"><img alt="Statues Edited in an Andy Worhol Style" src="./photography/thumbnail/tmbAndyWorholStatues.JPG" className="w-100 imgClick"/></a>
              </span>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">Bubbles in a water bottle with a vibrant array of colors in the background.</Tooltip>}>
            <span className="d-inline-block">
                <a target="_blank" href="./photography/WaterBottle.JPG" rel="noopener noreferrer"><img alt="Colorful Water Bottle" src="./photography/thumbnail/tmbWaterBottle.JPG" className="w-100 imgClick"/></a>
              </span>
            </OverlayTrigger>
          </Col>
        </Row>
      </Container>
      <br/><br/><br/>
    </div>
  );
}

export default Gallery;