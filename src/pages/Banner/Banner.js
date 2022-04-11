import React, { useEffect, useState } from 'react';
// import image from '../../image/sakib.png'
import "./Banner.css";
const Banner = () => {
    const[images,setImages]=useState([])
    
    useEffect(()=>{
        fetch('http://localhost:5000/banner')
        .then(res=>res.json())
        .then(data=>setImages(data));
    },[])
    return (
        <div className='banner'>
            <div className="info-header">
                <h3>I’m Rijwan Ahmed Sakib</h3>
                <h1>Software Engineer and Full Stack Developer.</h1>
                <h5>I build web and mobile applications with modern technologies, commit my code on Github, and write on my Blog.</h5>
                <div class="contact">
                       <a href="#contact" class="btn btn-primary btn-animate">Contact</a>
                 </div>
            </div>

            <div className="image">
                {
                    images.map(image=>
                        <img src={image.image} alt="img" />
                        )
                }
            </div>
        </div>
    );
};

export default Banner;