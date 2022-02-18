import React from 'react';
import About from '../About/About';
import './Home.css'
import Card from '../Card/Card';
import Contact from '../contact/Contact';
import Headers from '../header/Headers';
import Heading from '../Heading/Heading';
const Home = () => {
    return (
        <div className='allBody' id="home">
            <Headers></Headers>
            <Heading></Heading>
            <About></About>
            <Card></Card>
            <Contact></Contact>
        </div>
    );
};

export default Home;