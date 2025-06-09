import React from 'react';

function Award() {
    return (
        <div className='conainer mt-5'>
            <div className='row'>
                <div className="col-6 p-5">
                    <img src='media/images/largestBroker.svg' alt='Largest Broker'></img>
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>Largest stocks Broker in India</h1>
                    <p>We are the largest stock broker in India with over 10 million clients and a market share of over 20% and invest in:</p>
                    
                        <div className='col-6'>
                            <ul>
                             <li>Stocks</li>
                        <li>Derivatives</li>
                        <li>Mutual Funds</li>
                        </ul>
                        </div>
                       <div className='col-6'>
                        <ul>
                         <li>ETFs</li>
                        <li>Bonds</li>
                        </ul>
                       </div>

                    <img src='media/images/pressLogos.png' alt='pressLogos.png' style={{width: "90%"}}></img>

                </div>

            </div>
        </div>
    );
}

export default Award;