import Card from 'react-bootstrap/Card';
import { useParams,useNavigate } from 'react-router-dom';
import { DISHES } from './shared/dishes';
import { COMMENTS } from './shared/comments';


const DishDetails =()=>{
  const navigate = useNavigate();
  let {dishId}= useParams();
 
  
        const dish = DISHES.filter((dish) => dish.id === parseInt(dishId,10))[0] 
         
       const comment =COMMENTS.filter((comment)=>comment.dishId=== parseInt(dishId,10))

 
  
console.log(comment);
  
  

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
          <button className='btn m-5' onClick={() => navigate('/menu')}>GO BACK </button>
        </div>

      );
    }else return <div> <button className='btn m-5' onClick={() => navigate('/menu')}>GO BACK </button></div>;
  }
    
   
 
  

  return(
     <div className="container">
     
      <div className="row">
      {renderDish(dish)}
      {renderComments(comment)}
     
      </div>
    
      </div>
     
               
                );
}
export default DishDetails;



