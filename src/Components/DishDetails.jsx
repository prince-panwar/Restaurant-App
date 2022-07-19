import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { DISHES } from './shared/dishes';
import { COMMENTS } from './shared/comments';
import {Modal,ModalBody,ModalHeader} from 'reactstrap';
import {Form,Button }from 'react-bootstrap';

  


const DishDetails =()=>{
  

const [show,setShow]= useState(false);

   
  const navigate = useNavigate();
  let {dishId}= useParams();
 
  
  const dish = DISHES.filter((dish) => dish.id === parseInt(dishId,10))[0] 
         
  const comment =COMMENTS.filter((comment)=>comment.dishId=== parseInt(dishId,10))

 const toggle =()=>{
  console.log(show)
  return(setShow(!show));
  
    
 }



 
  

  
  

  const   renderDish=(dish)=>{
   
      if(dish!=null){
        return(
       
        <div className="col-12 col-md-5 m-1">
        <Card style={{ width: '18rem' }}
         
       >
      <Card.Img variant="top"  size =" 100%" src={dish.image}/>
      <Card.Body>
        <Card.Title>{dish.name}</Card.Title>
        <Card.Text>{dish.description}</Card.Text>
     </Card.Body>
    </Card>
    </div> );}
    else{
      return(
        <div></div>
      )
    }
      }
  
  
  
      const renderComments=(dish)=>{
    if(dish!=null){
      return(
        <div className='col-12 col-md-5 m-1'>
          <h4 className='bg-dark text-center mb-3'style={{color:'white',borderRadius:'60px'}}>Comments</h4>
          <ul className='list-unstyled'>
            {dish.map((comment)=>{
              return(
                <li key={comment.id}>
                  <p>{comment.comment}</p>
               <p>  --{comment.author},{new Date(comment.date).toDateString()}</p>
                </li>
              );
            })}
          </ul>
          <button className='btn btn-success mb-4 mt-4 ' style={{borderRadius:"60px" ,background:"red"} } onClick={toggle}>Submit Comment </button>
        </div>

      );
    }else return <div>    <button className='btn btn-success mb-4 mt-4 ' style={{borderRadius:"60px" ,background:"red"}} onClick={toggle}>Submit Comment </button> </div>;
  }
    
   
 
  

  return(
    <>
     <div className="container">
     
      <div className="row">
      {renderDish(dish)}
      {renderComments(comment)}
      </div>
      
     </div>

     <div className="container">
      <div className="row">
        <div className="col-7">  <button className='btn btn-success mb-4 mt-4 ' style={{borderRadius:"60px" ,background:"red"}} onClick={() => navigate('/menu')}>BACK </button></div>
      </div>
     </div>
    

    <Modal isOpen={show} toggle={toggle} >
      <ModalHeader toggle={toggle}>Comment</ModalHeader>
      <ModalBody>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        
        <Form.Control placeholder="Name"  />
        
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Rating</Form.Label>
        <Form.Select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Select>
      </Form.Group>
      <Form.Group>
      <Form.Label>comment</Form.Label>
        <Form.Control type="text" placeholder="comment"  />
     
       </Form.Group>
       <Button variant="primary" type="submit" onClick={toggle}>
        Submit
      
      </Button>
      </ModalBody>
    </Modal>
     
     
     </>
     
               
                );
}
export default DishDetails;



