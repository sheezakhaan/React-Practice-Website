import React from 'react';
import Common from './Common'
import want2 from "./images/want2.gif"

const Home = () => {
  return (
      <>
      <Common 
      name="Grow Your Business With"
      imgsrc={want2}
      to="/service"
      btnName="Get Started" 
      />
      </>
  );
}

export default Home;
