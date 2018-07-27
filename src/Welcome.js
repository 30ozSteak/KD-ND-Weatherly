import React from 'react';

const Welcome = (props) => {
  return (
    <div className = "welcome-message" >
      <h1>Weatherly</h1>
      <h5 className>A Simple Weather Searching App</h5>
      <p><span className = 'k'>Kiel</span> <a href="https://github.com/30ozSteak/KD-ND-Weatherly"><i className="fab fa-github"></i></a> Nick</p>
    </div>  
  )
}

export default Welcome;