import React, {useState } from 'react';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library
import pdfFile from '../Assets/SAKIBCV.pdf'
import Home from '../Home/Home'
import './Resume.css'

const Resume = () => {
    const [defaultPdfFile]=useState(pdfFile)
    const defaultLayoutPluginInstance = defaultLayoutPlugin(); 
    
    return (
        <div>
            <Home></Home>
            <div className="resume">
            <h1 >Resume</h1>
                
                {defaultPdfFile&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
                 <Viewer fileUrl={defaultPdfFile}
                plugins={[defaultLayoutPluginInstance]} />
               </Worker></>
               }
            </div>
                
            </div>
    );
};

export default Resume;