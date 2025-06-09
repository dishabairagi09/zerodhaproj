import React from 'react';

function Hero() {   
  return (
     <section className="container-fluid" id="supportHero">
      <div className="p-3 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="https://zerodha.com">Track Tickets</a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" />
          <br />
          <a href="https://zerodha.com" className='ml-2'>Track account opening</a>
          <a href="https://zerodha.com" className='ml-2'>Track segment activation</a>
          <a href="https://zerodha.com" className='ml-2'>Intraday margins</a>
          <a href="https://zerodha.com" className='ml-2'>Kite user manual</a>
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="https://zerodha.com">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="https://zerodha.com">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;