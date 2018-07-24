
import React from 'react';

const Welcome = (props) => {
  return (
    <div className = "welcomeToWeatherly">
      <h1 className = "welcomeText">Hello Nick</h1>
      {/* add a name entering component */}
      <h5 className = "welcomeTextTwo">Welcome to Weatherly</h5>
    </div>  
  )

}

export default Welcome;