import React from 'react';

const CurrentWeather = (props) => {
  return (
    <div className='current-weather'>
      <h1>Currently in {props.weather.location}</h1>
      <p className='current-temp'>{ props.weather.current }</p>
      <div className="current-bottom-row">
        <p>High: { props.weather.high }</p>
        
        <img src={require(`./img/${props.weather.icon}.png`)}/>
        <p>Low: { props.weather.low }</p>
      </div>
      </div>
    )
  }

  export default CurrentWeather;