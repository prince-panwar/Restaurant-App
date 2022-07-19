import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './MenuComponents';
import DishDetails from './DishDetails';

import { DISHES } from './shared/dishes';
import { PROMOTIONS } from './shared/promotions';

import { LEADERS} from './shared/leaders';
import Header from './headerComponent';
import Footer from './FooterComponent'
import Home from './Home';
import About from './About';
import{Routes,Route,} from 'react-router-dom';

function Main() {
 
 


  
 
  
  

  return (
   
  
  
    <div>
      <Header/>
    
      <Routes>
        <Route path="/" element={<Home dish={DISHES.filter((dish)=> dish.featured)[0]} promotion={PROMOTIONS.filter((promo)=> promo.featured)[0]} leader={LEADERS.filter((lead)=> lead.featured)[0]}/>}/>
       
        <Route   exact path="/menu" element={<Menu dishes={ DISHES}/>} />
        
         <Route exact path='/About' element={<About leaders={LEADERS}/>}/>
       
     
         <Route path='/menu/:dishId' element={<DishDetails/>} />
     
        
        
      </Routes>
     <Footer/>
    </div> 
   
    
  );
}

export default Main;