import React from 'react';
import { Button, Card } from 'react-bootstrap';

const RecentWork = () => {
    return (
        <div className='d-flex justify-content-center mt-5'>
            <div className="info mx-5">
                <h1>RECENT WORKS</h1>
            </div>
            <div className="rectnt-work mb-5">
            <Card className='mb-3'>
                <Card.Header as="h5">Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
             </Card>
            <Card className='mb-3'>
                <Card.Header as="h5">Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
             </Card>
            <Card className='mb-3'>
                <Card.Header as="h5">Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
             </Card>
            </div>
        </div>
    );
};

export default RecentWork;