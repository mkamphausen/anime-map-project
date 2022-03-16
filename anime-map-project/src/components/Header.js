import React from 'react';

import Sidebar from './Sidebar';

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';


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
        {/* <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form> */}
      </Navbar.Collapse>
    </div>
    </Container>
  </Navbar>
);

export default Header;
