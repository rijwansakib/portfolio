import React from 'react';
import { Nav } from 'react-bootstrap';
import'./Dashboard.css'

const DashBoard = () => {
    return (
        <div>

            
            {/* sidebar */}

            <div className="side-bar">
                    <div className='header' >
                        <h1>DashBoard</h1>  
                    </div>
                    <Nav.Link className='link' href='/project-manage' >Project Manage</Nav.Link> 
                    <Nav.Link className='link' href='/project' >Add Projects</Nav.Link> 
                    <Nav.Link className='link' href='/recent' >Add Recent work</Nav.Link> 
            </div>

        </div>

    );
};

export default DashBoard;