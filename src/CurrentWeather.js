import React from 'react';

const CurrentWeather = props => {
  return (
    <div className = 'currentWeather'>
      <h1>Here's The Current Weather in {props.city}</h1>
      <p>{ props.CurrentWeather.time }</p>
      <p>{ props.CurrentWeather.location }</p>
      <p>{ props.CurrentWeather.current }</p>
      <p>{ props.CurrentWeather.high }</p>
      <p>{ props.CurrentWeather.low }</p>

    </div>
    )
  }

export default CurrentWeather;