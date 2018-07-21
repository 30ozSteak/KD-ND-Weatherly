import React from 'react';

const CurrentWeather = (props) => {
  return (
    <div className = 'currentWeather'>
      <h1>Here's The Current Weather in {props.city}</h1>

    </div>
  )
}

export default CurrentWeather;