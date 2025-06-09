import React from 'react';

function Education() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='media/images/education.svg' alt='Education' className='img-fluid' />
                </div>
                <div className='col-6'>
                    <h1 className='mb-3'>Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='/education' style={{textDecoration: "none"}}>Varsity <i className="fa-solid fa-arrow-right" style={{color: "blue"}}></i></a>
                     <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='/education' style={{textDecoration: "none"}} >TradingQ&A <i className="fa-solid fa-arrow-right" style={{color: "blue"}}></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;