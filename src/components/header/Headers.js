import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import './Header.css'
const Headers = () => {
    return (
        <div>
        <Navbar className="bgsh" bg="light" variant="light" sticky="top" collapseOnSelect expand="lg" >
            <Container >
                <Navbar.Toggle className="custom-toggler" aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse className="justify-content-end alltrs">
                    <Nav.Link as={HashLink} to="/home#home">
                        <h6>HOME</h6>
                    </Nav.Link>
                    <Nav.Link as={HashLink} to="/home#about">
                    <h6>ABOUT</h6>
                    </Nav.Link>
                    <Nav.Link as={HashLink} to="/home#project">
                        <h6>PROJECT</h6>
                    </Nav.Link>
                    <Nav.Link as={HashLink} to="/home#contact">
                        <h6>CONTACT</h6>
                    </Nav.Link>
                    <Nav.Link as={HashLink} to="/blog">
                        <h6>BLOG</h6>
                    </Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
    );
};

export default Headers;