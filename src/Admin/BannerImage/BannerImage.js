import React, { useEffect, useRef, useState } from 'react';
import { Form, Row } from 'react-bootstrap';

const BannerImage = () => {
    const [images,setImages]=useState([]);    
    //use ref
     const imgUrlRef=useRef('');

    useEffect(()=>{
        fetch('http://localhost:5000/banner')
        .then(res=>res.json())
        .then(data=>setImages(data))
    },[])

    const handelBannerImage = e =>{
        const image=imgUrlRef.current.value;
        const newProject= {image:image}

         //send to server
    
    fetch('http://localhost:5000/banner',{
        method:'POST',
          headers:{
         'Content-Type': 'application/json',
          'Accept': 'application/json'
          },
          body:JSON.stringify(newProject)
       })
              .then(res=>res.json())
              .then(data=>{
                  const addedImage=data;
                  const newProjects=[...images,addedImage];
                  setImages(newProjects);
              })

              imgUrlRef.current.value=''

      
            e.preventDefault();

    }


    return (
        <div className='w-75 mx-auto'>
        <form onSubmit={handelBannerImage}>
        <h1 className='text-success'>Banner Image:: {images.length}</h1>

            <Row>

                <Form.Group>
                    <Form.Label className='text-muted'>Image URL</Form.Label>
                    <Form.Control ref={imgUrlRef} type="text" placeholder="Image URL" />
                </Form.Group>
                <input className='w-25 mx-auto my-5 ' type="submit" value="Submit"/> 
            </Row>
        </form>
    </div>
    );
};

export default BannerImage;