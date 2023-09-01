import React from 'react';
import Common from './Common'
import want from "./images/want.jpg"


const About = () => {
  return (
    <>
    <Common 
    name="Welcome To About Page" 
    imgsrc={want} 
    to="/contact" 
    btnName="Contact Now" />
    </>
  );
}

export default About;
