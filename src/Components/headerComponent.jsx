import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {NavLink} from "react-router-dom";
import './header.css';

 class Header extends Component{
    render(){
        return(
            <>
            <div className="row">
              <div className="col-lg-12 col-sm-6">
            <Navbar bg="transparent" expand="md">
      <Container fluid>
        <Navbar.Brand  >Restraunt</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            < NavLink className="b" to='/'>Home</NavLink>
            < NavLink className="b"  to='/menu'>Menu</NavLink>
            < NavLink className="b"  to='/About'>About Us</NavLink>
           
            
          </Nav>
          <Form className="d-flex" >
            <Form.Control
              type="search"
              placeholder="Search"
            
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
   
     
     
    </div>
     
    </div>
   
  
  
   
    
    

            </>

        );
    }
 }export default Header;


