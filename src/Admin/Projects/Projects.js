import React, { useEffect, useRef, useState } from 'react';
import { Form, Row } from 'react-bootstrap';

const Projects = () => {
        const [project,setProject]=useState([]);    
        //use ref
         const nameRef= useRef('');
         const imgUrlRef=useRef('');
         const titleRef=useRef('');
         const textRef=useRef('');
         const liveUrlRef=useRef('');
         const gitUrlRef=useRef('');
    
        useEffect(()=>{
            fetch('http://localhost:5000/projects')
            .then(res=>res.json())
            .then(data=>setProject(data))
        },[])
    
        //event handel add users
    
        const handelPrpjrct = e =>{
    
            const name=nameRef.current.value;
            const image=imgUrlRef.current.value;
            const title=titleRef.current.value;
            const text=textRef.current.value;
            const live=liveUrlRef.current.value;
            const gitLive=gitUrlRef.current.value;
    
            const newProject= {name:name,image:image,title:title,text:text,live:live,gitLive:gitLive}
    
            //send to server
    
            fetch('http://localhost:5000/projects',{
                method:'POST',
                  headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                  body:JSON.stringify(newProject)
            })
            .then(res=>res.json())
            .then(data=>{
                const addedProject=data;
                const newProjects=[...project,addedProject];
                setProject(newProjects);
            })
    
            nameRef.current.value=''
            imgUrlRef.current.value=''
            titleRef.current.value=''
            textRef.current.value=''
            liveUrlRef.current.value=''
            gitUrlRef.current.value=''
    
          e.preventDefault();
        }
        return (
            <div className='w-75 mx-auto'>
                <form onSubmit={handelPrpjrct}>
                <h1 className='text-success'>FEATURED PROJECT :: {project.length}</h1>
    
                    <Row>
                        <Form.Group>
                            <Form.Label className='text-muted'>Name</Form.Label>
                            <Form.Control ref={nameRef} type="text" placeholder="Name" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className='text-muted'>Image URL</Form.Label>
                            <Form.Control ref={imgUrlRef} type="text" placeholder="Image URL" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className='text-muted'>Title</Form.Label>
                            <Form.Control ref={titleRef} type="text" placeholder="Title" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className='text-muted'>Example textarea</Form.Label>
                            <Form.Control ref={textRef} as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className='text-muted'>Live site link</Form.Label>
                            <Form.Control  ref={liveUrlRef}type="text" placeholder="Live site link" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className='text-muted'>Git link</Form.Label>
                            <Form.Control ref={gitUrlRef}  type="text" placeholder="Git link" />
                        </Form.Group>
                        <input className='w-25 mx-auto my-5 ' type="submit" value="Submit"/> 
                    </Row>
                </form>
            </div>
    );
};

export default Projects;