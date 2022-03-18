//import react & external tools
import React from 'react';
//import components
import Sidebar from './Sidebar';
//import bootstrap & styles
import { Navbar, Container, Nav  } from 'react-bootstrap';

const Header = ({ filter, places, animeCollection, updateFilterBuildings, updatefilterNature, updatefilterAnimeID })  => (
  <Navbar className='header' expand="md">
    <Container fluid>
    <div className="container">
      <Navbar.Brand href="#">Anime Map Project</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Sidebar
          backdrop="false"
          filter = {filter} 
          places={places}
          animeCollection={animeCollection}
          updateFilterBuildings = {updateFilterBuildings}
          updatefilterNature = {updatefilterNature}
          updatefilterAnimeID = {updatefilterAnimeID}
        />
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
        </Nav>
      </Navbar.Collapse>
    </div>
    </Container>
  </Navbar>
);

export default Header;
