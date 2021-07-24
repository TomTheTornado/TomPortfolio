//import logo from './logo.svg';
//import './App.css';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Thomas Powell Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="d-flex justify-content-center" href="/TomPortfolio">Home</Nav.Link>
          <Nav.Link className="d-flex justify-content-center" href="/TomPortfolio/resume">Resume</Nav.Link>
          <Nav.Link className="d-flex justify-content-center" href="/TomPortfolio/gallery">Gallery</Nav.Link>
          <Nav.Link className="d-flex justify-content-center" href="/TomPortfolio/projects">Projects</Nav.Link>
          <Nav.Link className="d-flex justify-content-center" href="/TomPortfolio/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;