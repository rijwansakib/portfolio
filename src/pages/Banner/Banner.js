import React from 'react';
import image from '../../image/sakib.png'
import "./Banner.css";
const Banner = () => {
    return (
        <div className='banner'>
            <div className="info mx-5 mb-5 mt-auto">
                <h3>I’m Rijwan Ahmed Sakib</h3>
                <h1>Software Engineer and Full Stack Developer.</h1>
                <h5>I build web and mobile applications with modern technologies, commit my code on Github, and write on my Blog.</h5>
            </div>

            <div className="image">
                <img src={image} alt="img" />
            </div>
        </div>
    );
};

export default Banner;