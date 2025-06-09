import React from "react";

function RightSec({ imageURL, productName, productDescription, learnMore }) {
  return (
    <div className="container mt-5">
    <div className='row '>
      
      <div className='col-5  mt-5  '>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
          <a href={learnMore}  >Learn More</a> 
          </div>
        
          
      </div>
            <div className='col-2'></div>

      <div className='col-5 '>
        <img src={imageURL} />
      </div>
    </div>
    </div>
  );
}

export default RightSec;