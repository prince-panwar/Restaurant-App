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
         
            <Navbar bg="transparent" expand="sm">
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
            < NavLink className="b"  to='/contact'>Contact Us</NavLink>
           
            
          </Nav>
          <Form className="d-flex" >
            <Form.Control
              type="search"
              placeholder="Search"
            
              aria-label="Search"
            />
            <Button className="sButton" variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
   
   
   
  
  
   
    
    

            

        );
    }
 }export default Header;


