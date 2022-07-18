import React from "react";
import Main from './Components/mainComponent';
import { BrowserRouter } from "react-router-dom";


const App =()=>{
  return(
    <BrowserRouter>
    <div>
      <Main/>
    </div>
    </BrowserRouter>

  );
}
export default App;
