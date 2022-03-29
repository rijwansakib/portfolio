import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='fixed-top'>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand><Nav.Link >RS</Nav.Link></Navbar.Brand>
                <Nav className="">
                <Nav.Link href='/featured-project' >Projects</Nav.Link>
                <Nav.Link >Resources</Nav.Link>
                <Nav.Link >About</Nav.Link>
                <Nav.Link >Contact</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Home;