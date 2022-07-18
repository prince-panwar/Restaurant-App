import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

const Home =(props)=>{
  
  const RenderCard =({items})=>{
  
    return(
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={items.image} />
      <Card.Body>
        <Card.Title>{items.name}</Card.Title>
        <Card.Text>
        {items.description}
        </Card.Text>
        
      </Card.Body>
    </Card>

    );
  }
    return(
      <>
   
         <Carousel  >
      <Carousel.Item>
        <img   style={{height :"500px",width:"100%"}}
          className="d-block w-100"
          
          src="assets/images/rest1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>5 start interior</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         style={{height :"500px",width:"100%"}}
         className="d-block w-100  "
          src="assets/images/rest2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Best Views</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
           style={{height :"500px",width:"100%"}}
          className="d-block w-100  "
          src="assets/images/rest3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Best Food</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <div className="container my-3 py-4 text-center">
            <h1 className="p-4">Whats New</h1>
          </div>
 
<div className="container">
 
  <div className="row align-items-start pt-5">
    <div className="col-12 col-md m-1 ">
    <RenderCard items={props.dish}/>
    </div>
    
  
    <div className="col-12 col-md m-1">
    <RenderCard items={props.promotion}/>
     
    </div>
    
    <div className="col-12 col-md m-1">
    <RenderCard items={props.leader}/>
    </div>
  </div>
</div>

    </>
    );
}
export default Home;