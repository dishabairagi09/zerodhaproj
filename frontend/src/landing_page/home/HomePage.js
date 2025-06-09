import React from 'react';
import Hero from './Hero';
import Award from './Awards';
import Education from './Education';
import Pricing from './Pricing';
import Stats from './Stats';
import OpenAcc from '../OpenAcc';
import Navbar from '../Navbar';
import Footer from '../Footer';

function HomePage() {
    return (
        <div>
            
            <Hero />
            <Award />
            <Stats/>
            <Pricing />
            <Education />
            <OpenAcc />
            

        </div>
    );
}

export default HomePage;
