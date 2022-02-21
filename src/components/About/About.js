import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TagCanvas from '../TagCanvas/TagCanvas';
import './About.css'
const About = () => {
    return (
        <div className="guy-container">
            <Container className="conts">
            <Row>
            <Row className='icon-text'>
            <h1 className="text-center p-4 about-text">ABOUT</h1>
                        <Col md={3} sm={12} xs={12} lg={3}>
                            <img src="https://i.ibb.co/41SrFzf/icons8-fast-50.png" alt="" />
                            <h1>Fast</h1>
                            <p>Fast load times and lag free interaction, my highest priority.</p>
                        </Col>
                        <Col md={3} sm={12} xs={12} lg={3}>
                        <img src="https://i.ibb.co/mhgv4T7/icons8-responsive-50.png" alt="" />
                            <h1>Responsive</h1>
                            <p>My layouts will work on any device, big or small.</p>
                        </Col>
                        <Col  md={3} sm={12} xs={12} lg={3}>
                        <img src="https://i.ibb.co/fMX3X8R/icons8-light-48.png" alt="" />
                            <h1>Intuitive</h1>
                            <p>Strong preference for easy to use, intuitive UX/UI.</p>
                        </Col>
                        <Col  md={3} sm={12} xs={12} lg={3}>
                        <img src="https://i.ibb.co/KmgZft1/icons8-rocket-40.png" alt="" />
                            <h1>Dynamic</h1>
                            <p>Websites don't have to be static, I love making pages come to life.</p>
                        </Col>
                    </Row>
                <Row>
                    <Col  md={6} sm={12} xs={12} lg={6}>
                        <div className="guy-left">
                        <h1>
                        Who's this guy?
                        </h1>
                        <p>Hey, My name is Nazrul islam. I'm a hardworking skilled web developer. I always love to upgrade myself to new programming things. Whenever I sit down to do programming, I feel like I'm moving to another world, a world that is completely different from this normal world.
When I was a kid, programming was a curiosity for me. From then on I had a mission that I would learn programming anyway. I've been on this line ever since, and now I love to introduce myself as a MERN Stack developer.</p>
                        </div>
                    </Col>
                    <Col  md={6} sm={12} xs={12} lg={6}>
                        <div className="bar">
                        <div className="prog-text">
		                <h1>html</h1>
		                <TagCanvas done="90"/>
	                    </div>
                        <div className="prog-text">
		                <h1>CSS</h1>
		                <TagCanvas done="80"/>
	                    </div>
                        <div className="prog-text">
		                <h1>JavaScript</h1>
		                <TagCanvas done="70"/>
	                    </div>
                        <div className="prog-text">
		                <h1>React</h1>
		                <TagCanvas done="60"/>
	                    </div>
                        <div className="prog-text">
		                <h1>Bootstrap</h1>
		                <TagCanvas done="80"/>
	                    </div>
                        </div>
                    </Col>
                </Row>
            </Row>
            </Container>
        </div>
    );
};

export default About;