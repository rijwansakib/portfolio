import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const RecentWork = () => {
    const[works,setWorks]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/recent')
        .then(res=>res.json())
         .then(data=>setWorks(data))
    },[])
    return (
        <div className='d-flex justify-content-center mt-5'>
            <div className="info mx-5">
                <h1>RECENT WORKS</h1>
            </div>
            <div className='d-flex flex-column'>
            {
                works.map( work=>
                    <div className="rectnt-work mb-5">
                        <Card className='mb-3'>
                            <Card.Header as="h5">{work.name}</Card.Header>
                            <Card.Body>
                                <Card.Title>{work.taitle}</Card.Title>
                                <Card.Text>
                                {work.text}
                                </Card.Text>
                                <Button variant="primary" href={work.gitLive} >Github</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    
                )
            }
            </div>
        </div>
    );
};

export default RecentWork;