import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Card.css'
const Card = () => {
    return (
        <div id="project" className="cards-containers">
            <Row>
            <div className="proj">
            <h1 className="text-center">Projects</h1>
            </div>
                <Col md={4} sm={12} xs={12} lg={4}>
                <div class="container">
    <div class="card">
      <div class="image">
        <img  href="#" src ="https://i.ibb.co/fp7nCVb/Screenshot-3.jpg"/>
      </div>
      <div class="content">
        <h3>SQUA-DRONE</h3>
        <p>A fully functional, full-stack web app based on MERN.
This is an e-commerce niche project, users can buy any drone if they are logged in  can also view their orders on the Dashboard</p>
        <div>
            <Link to="/drone">
                <Button className="btsd">Details</Button>
            </Link>
        </div>
      </div>
    </div>    
  </div>
                </Col>
                <Col md={4} sm={12} xs={12} lg={4}>
                <div class="container">
    <div class="card">
      <div class="image">
        <img href = "#" src ="https://i.ibb.co/C61D0Pp/Screenshot-4.jpg"/>
      </div>
      <div class="content">
        <h3>AHAR</h3>
        <p>A functional food-delivery web application using MERN stack.
                Users can order any food and view their order on the My orders page.</p>
                <div>
            <Link to="/ahar">
                <Button className="btsd">Details</Button>
            </Link>
        </div>
      </div>
    </div>    
  </div>
                </Col>
                <Col md={4} sm={12} xs={12} lg={4}>
                <div class="container">
    <div class="card">
      <div class="image">
        <img href = "#" src ="https://i.ibb.co/XLcczc5/Screenshot-2.jpg"/>
      </div>
      <div class="content">
        <h3>IBN-SINA</h3>
        <p>Here you will find health services according to your needs.
Sign up with email, private page for logged-in users.
You can book any service on the service page.</p>
<div>
            <Link to="/ibnesina">
                <Button className="btsd">Details</Button>
            </Link>
        </div>
      </div>
    </div>    
  </div>
                </Col>
            </Row>
        </div>
    );
};

export default Card;