import React from 'react'
import { useState, useEffect } from 'react';
import '../fronttext.css';
const FrontText = () => {
const [rocketSrc, setRocketSrc] = useState('rocket1.png');


useEffect(() => {
    const intervalId = setInterval(() => {
      setRocketSrc(prevSrc => (prevSrc === 'rocket1.png' ? 'rocket2.png' : 'rocket1.png'));
    }, 1000);

    return () => clearInterval(intervalId); // Clear the interval on component unmount
  }, []); 

  
  return (
    <div >
      <div className="content">
      <div className='rocket'><img src ={rocketSrc} alt = "rocket"/></div>
        <div><h1 className='heading'>Launching New Module Soon!</h1></div>
       
      </div>
      <p className='subHead'>Exciting things are in the works! We're currently <span className='b-text'>Crafting a new feature</span> for you.</p><p className='subHead'> Keep an eye out for updates - We're working to make it available soon!</p>
      <div><h2 className='secHeading'>GET READY FOR REVEAL!<img className='star pop' src='star.png' alt='star'/></h2></div>
    </div>
  )
}

export default FrontText
