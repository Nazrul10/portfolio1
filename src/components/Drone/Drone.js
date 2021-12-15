import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
const Drone = () => {
    return (
        <div className="ahar-container"> 
            <div className="taitles">
            <h1>SQUA-DRONE</h1>
            <h3>A simple MERN food website</h3>
            </div>
            <div className="top-ahar">
                    <Row>
                        <Col md={4} sm={12} xs={12} lg={4}>
                            <div>
                                <img width="100%" src="https://i.ibb.co/fp7nCVb/Screenshot-3.jpg" alt="" />
                            </div>
                        </Col>
                        <Col md={4} sm={12} xs={12} lg={4}>
                        <div>
                                <img width="100%" src="https://i.ibb.co/B2HbGv2/Screenshot-3.jpg" alt="" />
                            </div>
                        </Col>
                        <Col md={4} sm={12} xs={12} lg={4}>
                        <div>
                                <img width="100%" src="https://i.ibb.co/hsd0srt/Screenshot-4.jpg" alt="" />
                            </div>
                        </Col>
                    </Row>

        </div>
        <div className="bottom-ahar">
            <Row>
            <Col md={6} sm={12} xs={12} lg={6}>
                    <div>
                                <img width="100%" src="https://i.ibb.co/fp7nCVb/Screenshot-3.jpg" alt="" />
                            </div>
            </Col>
            <Col  md={6} sm={12} xs={12} lg={6}>
            <h3>Technology</h3>
                <p>React JS, Node JS, Node Express, MongoDB, Firebase, React Bootstrap.
                </p>
                <h3>Summary </h3>
                <li>A functional food-delivery web application using MERN stack.
                </li>
                <li>Users can order any food and view their order on the My orders page.</li>
                <li>An admin can add any food on Add food and control
                Manage page.</li>
                <div className="bttn">
                    <a href="https://drone-camera-clint-c1e2d.web.app/" target="_blank">
                    <Button className="bts">Live link</Button>
                    </a>
                    <a href="https://github.com/Nazrul10/Drone-clint" target="_blank">
                    <Button  className="bts">Github link</Button>
                    </a>
                </div>
            </Col>
            </Row>
        </div>
        </div>
    );
};

export default Drone;