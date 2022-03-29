import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProjectManage = () => {
    const[featuredProject,setFeaturedProjects]=useState([])
    const[recentProject,setRecentProject]=useState([])

    //get data from api

    useEffect(()=>{
        fetch('http://localhost:5000/projects')
        .then(res=>res.json())
        .then(data=>setFeaturedProjects(data))
    },[])
    useEffect(()=>{
        fetch('http://localhost:5000/recent')
        .then(res=>res.json())
        .then(data=>setRecentProject(data))
    },[])

    //delete data 
    const deleteContact= id =>{ // <-- declare id parameter
        fetch(`http://localhost:5000/projects/${id}`) // <-- remove ;
        .then(res => res.json())
        .then(data=>setFeaturedProjects(featuredProject))
    }




    return (
        <div className=''>
            <h1>Featured Project</h1>
            <p>-------------------------</p>
                    <table className="table border">
                    <thead>
                        <tr className='d-flex justify-content-around'>
                        <div><th scope="col">#</th></div>
                        <div><th scope="col">Project Name</th></div>
                        <div><th scope="col">DELETE PROJECT</th></div>
                        </tr>
                    </thead>
    
                    </table>
            {
                featuredProject.map(featuredProject=>(
                <table className='table  border border'>
                    <tbody >
                        <tr className='d-flex justify-content-around'>
                        <div><th scope="row">{featuredProject.id+1}</th></div>
                        <div><td className='fs-5 fw-bold'>{featuredProject.name}</td></div>
                        <div><td><button type="button" className="btn btn-danger"onClick={ () =>deleteContact(featuredProject.id) }>Delete</button></td></div>
                        </tr>
                </tbody>

                </table>

                ))
            }

            {/* recent work */}
            <h1>Recent work</h1>
            <p>-------------------------</p>
                    <table className="table  border">
                    <thead>
                        <tr className='d-flex justify-content-around'>
                        <div><th scope="col">#</th></div>
                        <div><th scope="col">Project Name</th></div>
                        <div><th scope="col">DELETE PROJECT</th></div>
                        </tr>
                    </thead>
    
                    </table>
            {
                recentProject.map(recentProject=>(
                <table className='table border'>
                    <tbody >
                        <tr className='d-flex justify-content-around'>
                        <div><th scope="row">{recentProject.id+1}</th></div>
                        <div><td className='fs-5 fw-bold'>{recentProject.name}</td></div>
                        <div><td><button type="button" className="btn btn-danger">Delete</button></td></div>
                        </tr>
                </tbody>

                </table>

                ))
            }
        </div>
    );
};

export default ProjectManage;