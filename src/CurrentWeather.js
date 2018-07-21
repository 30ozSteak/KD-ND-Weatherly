import React from 'react'

const CurrentWeather = (props) => {
  return (
    <div className = 'currentWeather'>
      <h1>Here's The Current Weather in {props.city}</h1>
      <p>{ props.time }</p>
      <p>{ props.location }</p>
      <p>{ props.current }</p>
      <p>{ props.high }</p>
      <p>{ props.low }</p>
    </div>
    )
  }

  export default CurrentWeather;