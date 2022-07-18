import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';


const DishDetails =(props)=>{
  let{dishId} = useParams();
  console.log(dishId)
  

  
  

  const   renderDish=(dish)=>{
    console.log("props",dish)
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
          <h4>Comments</h4>
          <ul className='list-unstyled'>
            {dish.comments.map((comment)=>{
              return(
                <li>
                  <p>{comment.comment}</p>
               <p>  --{comment.author},{new Date(comment.date).toDateString()}</p>
                </li>
              );
            })}
          </ul>
        </div>

      );
    }else return <div></div>;
  }
    
   
  
  
  
  return(
     <div className="container">
      <div className="row">
      {/* {renderDish(dish)} */}
      {/* {renderComments(comment)} */}
      </div>
    
      </div>
     
               
                );
}
export default DishDetails;



