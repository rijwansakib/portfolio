import React from 'react';
import './About.css'
import Home from '../Home/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGlobe,faDatabase, faGear, faPaintbrush} from '@fortawesome/free-solid-svg-icons'
import {faHtml5, faReact} from '@fortawesome/free-brands-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'


const About = () => {
    return (
        
        <div className='main'>
            <Home></Home>
            
            {/* ABOUT SECTION */}
            <div className='about'>
               <div className='heading'>
                   <h1>About</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis enim quaerat et. Aliquid, quae at doloribus nostrum cumque nulla cupiditate, placeat eos molestiae, corrupti delectus eaque sequi! Ipsa, qui totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam libero quis earum fugiat reiciendis, beatae quasi nihil odio sed. Optio, doloremque dignissimos. Quia veritatis non eius ea, autem natus explicabo?</p>
               </div>
               <div className='skills'>
                   <h1>Technical Skills</h1>
                   <div className='skill'>
                            <div className='details Language'>
                              <div className='icon'>
                              <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
                              </div>
                                <h4>Programming Language</h4>   
                                <h6>JavaScript /TypeScript/C</h6>
                            </div>
                            <div className='details Frameworks'>
                                <div className='icon'>
                                <FontAwesomeIcon icon={faReact} />
                                </div>
                                <h4>Libraries & Frameworks</h4>
                                <h6>React , Express, Tailwind,Bootstrap</h6>
                            </div>
                            <div className='details Databases'>
                                <div className='icon'>
                                    <FontAwesomeIcon icon={faDatabase}></FontAwesomeIcon>
                                </div>
                                <h4>Databases</h4>
                                <h6>MongoDB</h6>
                            </div>
                            <div className='details Dev'>
                                <div className='icon'>
                                <FontAwesomeIcon icon={faGear} />
                                </div>
                                <h4>Dev Tools</h4>
                                <h6>Github, Trello</h6>
                            </div>
                            <div className='details Design'>
                                <div className='icon'>
                                    <FontAwesomeIcon icon={faPaintbrush}></FontAwesomeIcon>
                                </div>
                                <h4>Design Tools</h4>
                                <h6>Figma, Adobe XD, Adobe Illustrator</h6>
                            </div>
                            <div className='details Markup'>
                                <div className='icon'>
                                    <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
                                </div>
                                <h4>Markup language AND Style</h4>
                                <h6>HTML/CSS</h6>
                            </div>
                   </div>

               </div>
            </div>
        </div>
    );
};

export default About;