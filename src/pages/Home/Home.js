import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
const Home = () => {
   
    return (
        <div className='fixed-top'>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand><Nav.Link href='/' >RS</Nav.Link></Navbar.Brand>
                <Nav className="">
                <Nav.Link href='/featured-project' >Projects</Nav.Link>
                <Nav.Link href='/about'>About</Nav.Link>
                <Nav.Link href='/resume'>Resume</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
    </div>
    );
};

export default Home;