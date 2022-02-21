import { Col, Container, Row } from 'react-bootstrap';
import Scrolling from '../Scrolling/Scrolling';
import Typicals from '../Typical/Typicals';
import React, { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'
import './Heading.css'
const Heading = () => {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
    useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(BIRDS({
          el: myRef.current
        }))
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy()
      }
    }, [vantaEffect])
 
    return (
        <div ref={myRef} className="headings">
            <Container className='img-text'>
             <Row>
                <Col md={6} sm={12} xs={12} lg={6}>
                <div className="headerimg">
                    <img src="https://i.ibb.co/TByccHc/Nazrul.jpg" alt="" />
                </div>
                </Col>
                <Col  md={6} sm={12} xs={12} lg={6}>
                    <div className="scroll-hd">
                        <h1>Hello,</h1>
                        <h2><Typicals/></h2>
                        <h3><Scrolling/></h3>
                    </div>
                    <div className="cv-div">
                        <a href="https://drive.google.com/u/0/uc?id=1ULGtovAUta7EhbGaKozxqcH9t_WATb9I&export=download">
                        <button className="cv-dwln">Download CV</button>
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Heading;