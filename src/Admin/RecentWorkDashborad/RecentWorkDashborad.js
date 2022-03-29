import React, { useEffect, useRef, useState } from 'react';
import { Form, Row } from 'react-bootstrap';
const RecentWorkDashborad = () =>{
    //post method
    
    //satate use
    const [recent,setRecent]=useState([]);
     console.log(recent)

    //use ref
     const nameRef= useRef('');
     const titleRef=useRef('');
     const textRef=useRef('');
     const gitUrlRef=useRef('');


     useEffect(()=>{
        fetch('http://localhost:5000/recent')
        .then(res=>res.json())
        .then(data=>setRecent(data))
    },[])

         //event handel add users
        
       
        const handeRecentWork = e =>{

            const name=nameRef.current.value;
            const title=titleRef.current.value;
            const text=textRef.current.value;
            const gitLive=gitUrlRef.current.value;
    
            const recentWork= {name:name,title:title,text:text,gitLive:gitLive}

            fetch('http://localhost:5000/recent',{
                method:'POST',
                  headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                  body:JSON.stringify(recentWork)
            })
            .then(res=>res.json())
            .then(data=>{
                const addedProject=data;
                const recentWork=[...recent,addedProject];
                setRecent(recentWork);
            })
    
            nameRef.current.value=''
            titleRef.current.value=''
            textRef.current.value=''
            gitUrlRef.current.value=''
    
          e.preventDefault();
        }
    return (
        <div className='w-75 mx-auto'>

            <form onSubmit={handeRecentWork}>
            <h1>Recent Work:{recent.length}</h1>

                <Row>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control ref={nameRef} type="text" placeholder="Name" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control ref={titleRef} type="text" placeholder="Title" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control ref={textRef} as="textarea" rows={3} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Git link</Form.Label>
                        <Form.Control ref={gitUrlRef}  type="text" placeholder="Git link" />
                    </Form.Group>
                    <input className='w-25 mx-auto' type="submit" value="Submit"/> 
                </Row>
            </form>
        </div>
    );
};

export default RecentWorkDashborad;