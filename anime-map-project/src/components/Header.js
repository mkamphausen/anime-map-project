import React from 'react';

import Sidebar from './Sidebar';

import { Navbar, Container, Nav  } from 'react-bootstrap';


const Header = ({addPlace, places, animeCollection})  => (
  <Navbar bg="light" expand="md">
    <Container fluid>
    <div className="container">
      <Navbar.Brand href="#">Anime Map Project</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Sidebar 
          backdrop="false" 
          addPlace={addPlace}
          places={places}
          animeCollection={animeCollection}
        />
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#map">Map</Nav.Link>
          <Nav.Link href="#action2">About</Nav.Link>
          <Nav.Link href="#action3">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </div>
    </Container>
  </Navbar>
);

export default Header;
