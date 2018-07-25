import React, { Component } from 'react';

const TenDayCard = (props) => {
    return (
      <div className="ten-day-card">
        <h1 className='ten-day-day'>{props.day}</h1>
        <h1 className='ten-day-date'>{props.date}</h1> 
        <h1 className='ten-day-high'>High: {props.high}°F</h1>
        <h1>Low: {props.low}°F</h1>
        <img className="ten-day-icon" src={require(`./img/${props.icon}.png`)}/>
      </div>
  )
}

export default TenDayCard;