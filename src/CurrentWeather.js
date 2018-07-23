import React from 'react';

const CurrentWeather = (props) => {
  return (
    <div className='current-weather'>
      <h1>Here's The Current Weather in {props.weather.location}</h1>
      {/* <p>{ props.weather.time }</p> */}
      {/* <p>{ props.weather.location }</p> */}
      <p className='current-temp'>{ props.weather.current }</p>
      <div className="current-bottom-row">
        <p>High: { props.weather.high }</p>
        <img src={ props.weather.icon }/>
        <p>Low: { props.weather.low }</p>
      </div>
      </div>
    )
  }

  export default CurrentWeather;