import React from 'react'

const CurrentWeather = (props) => {
  return (
    <div className = 'currentWeather'>
      <h1>Here's The Current Weather in {props.weather.city}</h1>
      <p>{ props.weather.time }</p>
      <p>{ props.weather.location }</p>
      <p>{ props.weather.current }</p>
      {/* <p>{ props.weather.high }</p>
      <p>{ props.weather.low }</p> */}
      <img src={ props.weather.icon } alt="an icon displaying the current weather"/>
    </div>
    )
  }

  export default CurrentWeather;