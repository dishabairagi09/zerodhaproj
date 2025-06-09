import React from "react";

function Universe() {
  return (
    <div className="container mt-5 ">
      <div className="row text-center mb-5">
        <h6>Want to know more about our technology stack? Check out the Zerodha.tech blog.</h6>
       <h2 className="mt-3">The Zerodha Universe</h2>
       <p className="text-muted mt-2">Extend your trading and investment experience even further with our partner platforms</p>
       </div>
<div className="row text-center">
       <div className="col-4 p-3">
        <img src="media/images/smallcaseLogo.png"/>
        <p className="text-small text-muted "></p>
       </div>
        <div className="col-4 p-3">
           <img src="media/images/zerodhaFundhouse.png" style={{width: "50%"}}/>
        <p className="text-small text-muted "></p>
        </div>
          
       <div className="col-4 p-3">
         <img src="media/images/sensibullLogo.svg" style={{width: "50%"}}/>
        <p className="text-small text-muted "></p>
       </div>

        <div className="col-4 p-3 mt-5">
        <img src="media/images/goldenpiLogo.png" />
        <p className="text-small text-muted "></p>
       </div>
        <div className="col-4 p-3 mt-5">
           <img src="media/images/streakLogo.png" style={{width: "50%"}}/>
        <p className="text-small text-muted "></p>
        </div>
          
       <div className="col-4 p-3 mt-5">
         <img src="media/images/dittoLogo.png" style={{width: "40%"}}/>
        <p className="text-small text-muted "></p>
       </div>
            <button className='btn btn-primary mb-5 mt-5' style={{width: "20%", margin: "0 auto"}} >Signup Now</button>

    </div>
    </div>
  );
}

export default Universe;