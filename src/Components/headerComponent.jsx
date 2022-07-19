import React, {useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {NavLink} from "react-router-dom";
import './header.css';
import {Modal,ModalHeader,ModalBody} from 'reactstrap'

 const Header=()=> {
  
      const[isModalOpen,setIsModalOpen]=useState(false);

      const toggleModal=()=>{
        return( setIsModalOpen(!isModalOpen));
       
      }
        return(
          <>
         
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
            <Button className="sButton " variant="outline-success">Search</Button>
          </Form>
          <button className="btn btn-primary ml-auto" onClick={toggleModal}>Login</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Modal isOpen={isModalOpen} toggle={toggleModal}>
<ModalHeader  toggle={toggleModal}>Login</ModalHeader>
<ModalBody>
<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={toggleModal} >
        Submit
      </Button>
    </Form>

</ModalBody>
    </Modal>
    
    </>
   
   
   
  
  
   
    
    

            

        );
    
 }
 export default Header;


