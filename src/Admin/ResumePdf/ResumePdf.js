import React, { useRef, useState } from 'react'

const ResumePdf = () => {
    const [resumes,SetResume]=useState([]);    
    //use ref
     const resumePdf=useRef('');
  
  // form submit
  const handlePdfFileSubmit=(e)=>{
        const resume=resumePdf.current.value;
        const newResume= {resume:resume}

         //send to server
    
    fetch('http://localhost:5000/resume',{
        method:'POST',
          headers:{
         'Content-Type': 'application/json',
          'Accept': 'application/json'
          },
          body:JSON.stringify(newResume)
       })
              .then(res=>res.json())
              .then(data=>{
                  const addedresume=data;
                  const newProjects=[...resumes,addedresume];
                  SetResume(newProjects);
              })

              resumePdf.current.value=''

      
            e.preventDefault();

    
  }
    return (
        <div className='container'>
    
        <br></br>
        
          <form className='form-group' onSubmit={handlePdfFileSubmit}>
            <input type="file" ref={resumePdf} className='form-control'/>
            <br></br>
            <button type="submit" className='btn btn-success btn-lg'>
              UPLOAD
            </button>
          </form>
        </div>
      );
};

export default ResumePdf;