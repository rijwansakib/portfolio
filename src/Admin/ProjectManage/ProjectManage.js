import React, { useEffect, useState } from 'react';

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

    //delete data  from feature project

    const deleteProject= id =>{ // <-- declare id parameter
       const proceed=window.confirm('Are You Sure, You Want To Delete?');
       if(proceed){
        fetch(`http://localhost:5000/projects/${id}`,{

            method:'DELETE'
        })
       
        .then(res => res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert('deleted successfully');
                const remainingProjecrt=featuredProject.filter(project=>project._id !== id);
                    setFeaturedProjects(remainingProjecrt)
                
            }
        })
       }
    }
   
    //delete recent project
    const deleteRecentProject= id =>{
        const proceed=window.confirm('Are You Sure, You Want To Delete?');
        if(proceed){
            fetch(`http://localhost:5000/recent/${id}`,{

                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    alert('deleted successfully');
                    const remainingRecedntProject=recentProject.filter(recent=>recent._id!==id);
                    setRecentProject(remainingRecedntProject)

                }
            })
        }
    }



    return (
        <div className=' mx-5 w-75'>
            <h1 className='text-muted'>Featured Project</h1>
            <p>-------------------------</p>
                    <table className="table border">
                    <thead>
                        <tr className='d-flex justify-content-around'>
                        <div><th scope="col"  className='text-muted'># PROJECT ID</th></div>
                        <div><th scope="col" className='text-muted'>Project Name</th></div>
                        <div><th scope="col" className='text-muted'>Delete PROJECT</th></div>
                        </tr>
                    </thead>
    
                    </table>
            {
                featuredProject.map(featuredProject=>(
                <table className='table  border border'>
                    <tbody >
                        <tr className='d-flex justify-content-around'>
                        <div><th scope="row"  className='text-muted'>{featuredProject._id}</th></div>
                        <div><td className='fs-5 fw-bold text-muted'>{featuredProject.name}</td></div>
                        <div><td><button type="button" className="btn btn-danger"
                        onClick={ () =>deleteProject(featuredProject._id) }>Delete</button></td></div>
                        </tr>
                </tbody>

                </table>

                ))
            }

            {/* recent work */}
            <h1 className='text-muted'>Recent work</h1>
            <p>-------------------------</p>
                    <table className="table  border">
                    <thead>
                        <tr className='d-flex justify-content-around'>
                        <div><th scope="col" className='text-muted'># PROJECT ID</th></div>
                        <div><th scope="col" className='text-muted'>Project Name</th></div>
                        <div><th scope="col" className='text-muted'>Delete PROJECT</th></div>
                        </tr>
                    </thead>
    
                    </table>
            {
                recentProject.map(recentProject=>(
                    
                <table className='table border'>
                    <tbody >
                        <tr className='d-flex justify-content-around'>
                        <div><th scope="row" className='text-muted'>{recentProject._id}</th></div>
                        <div><td className='fs-5 fw-bold text-muted'>{recentProject.name}</td></div>
                        <div><td><button type="button" className="btn btn-danger"
                        onClick={()=>deleteRecentProject(recentProject._id) }>Delete</button></td></div>
                        </tr>
                </tbody>

                </table>

                ))
            }
        </div>
    );
};

export default ProjectManage;