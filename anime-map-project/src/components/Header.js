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
      <Navbar.Brand href="#">        
        Anime Map Project
      </Navbar.Brand>
        <Sidebar
          backdrop="false"
          filter = {filter} 
          places={places}
          animeCollection={animeCollection}
          updateFilterBuildings = {updateFilterBuildings}
          updatefilterNature = {updatefilterNature}
          updatefilterAnimeID = {updatefilterAnimeID}
        />
    </div>
    </Container>
  </Navbar>
);

export default Header;
