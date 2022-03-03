import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">RS</Navbar.Brand>
                <Nav className="">
                <Nav.Link href="#Projects">Projects</Nav.Link>
                <Nav.Link href="#Resources">Resources</Nav.Link>
                <Nav.Link href="#About">About</Nav.Link>
                <Nav.Link href="#Contact">Contact</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Home;