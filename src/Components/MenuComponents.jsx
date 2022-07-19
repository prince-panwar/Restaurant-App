import React from "react";
import{MdRestaurantMenu} from 'react-icons/md'

import Card from 'react-bootstrap/Card';
import { Link ,} from "react-router-dom";





const Menu =(props)=>{
   
  
   
  
    return(
       
        
        
            
      
        
            
        <div className="container my-3 py-4 text-center">
         
             <h1 className="text-center bg-dark  p-4" style={{borderRadius:"60px", color:"White"}}><MdRestaurantMenu/> MENU ITEMS</h1>
           <div className="row">
        
        {props.dishes.map((dish)=>{
            
            return(
               
                
                 <div className="col-12 col-md-5 m-1 pt-4">
                     
            <Card style={{ width: '18rem' }}>
                <Link to={`/menu/${dish.id}`}>
          <Card.Img variant="top" src={dish.image} alt="error"/>
          <Card.Body>
            <Card.Title>{dish.name}</Card.Title>
         </Card.Body>
         </Link>
        </Card>
        </div> );
         
        })}
         </div>
       
   
      </div>
      
        
       
       
       
        
    );
}
export default Menu;