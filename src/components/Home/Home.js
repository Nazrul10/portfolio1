import React from 'react';
import About from '../About/About';
import Card from '../Card/Card';
import Contact from '../contact/Contact';
import Headers from '../header/Headers';
import Heading from '../Heading/Heading';
const Home = () => {
    return (
        <div id="home">
            <Headers></Headers>
            <Heading></Heading>
            <About></About>
            <Card></Card>
            <Contact></Contact>
        </div>
    );
};

export default Home;