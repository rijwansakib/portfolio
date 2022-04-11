import React, { useEffect, useState } from 'react';
import { Button} from 'react-bootstrap';
import '../FeaturedProject/FeaturedProject.css'
import Home from '../Home/Home';

const FeaturedProject = () => {
    const[projects,setProjects]=useState([])
    console.log(projects);
    useEffect(()=>{
        fetch('http://localhost:5000/Projects')
        .then(res=>res.json())
        .then(data=>setProjects(data))
    },[])
    return (
        <div className='mb-3'>
            <Home></Home>
               
                                <div className="info mx-auto">
                                    <h1>Featured Project</h1>
                                </div>


                                <div className='project mt-5'>
                    
                            {
                                
                             projects.map(project=>
                                    <div className='mx-2 mt-3'>
                                        <div className="">
                                            <div className="col">
                                                <div className="card">
                                                    <img  src={project.image} className="card-img-top w-100 h-50 mx-auto"   alt="..."/>
                                                    <div className="card-body">
                                                    <h5 className="card-title">{project.title}</h5>
                                                    <p className="card-text">{project.text}</p>
                                                    <Button className='mx-2 ' href={project.live} variant='primary'>LIVE</Button>
                                                    <Button className='mx-2 git' href={project.gitLive} variant='primary'> gitHub</Button>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    )

                
                            }
                </div>
        </div>
    );
};

export default FeaturedProject;