// import React, { useState } from 'react';

// function Button() {

//     const [ search, setSearch ] = useState(false);

//     return(
//         <button className='button' onClick={() => setSearch(!search)}>
//            Browse
//         </button>
//     )

// }

import React from 'react';
import { useNavigate } from "react-router-dom";
function Button() {
  
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `newPath`; 
    navigate(path);
  }
  
  return (
     <div>
     
                
          <Button
            onClick={routeChange}
              >
              Login
            </Button>
     
    </div>
  );
}

export default Button;