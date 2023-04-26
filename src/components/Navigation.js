import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Navigation() {
  return (
    <div >
         <Navbar bg="dark" expand="lg" className='nav'>
      <Container fluid>
        <Navbar.Brand href="#" style={{color:"rgb(196, 21, 123)",fontFamily:"-moz-initial",fontSize:"80px",fontStyle:"italic"}}>API</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{textDecoration:"none" ,color:"grey", fontSize:"20px"}}>Home</Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{backgroundColor:"black", border:"white", color:"white"}}/>
            <Button variant="outline-success" style={{background:"rgb(196, 21, 123)", border:"none",color:"white"}}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navigation