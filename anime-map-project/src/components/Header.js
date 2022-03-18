//import react & external tools
import React from 'react';
//import components
import Sidebar from './Sidebar';
//import bootstrap & styles
import { Navbar, Container, Nav  } from 'react-bootstrap';
import logo from '../logo.svg'

const Header = ({ filter, places, animeCollection, updateFilterBuildings, updatefilterNature, updatefilterAnimeID })  => (
  <Navbar className="header" expand="md">
    <Container fluid>
    <div className="container">
      <Navbar.Brand href="#">        
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
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
