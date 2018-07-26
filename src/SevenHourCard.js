import React, { Component } from 'react';

const SevenHourCard = (props) => {
  return (
    <div className = "seven-hour-section">
      <h1 className ="seven-hour-time">{props.time}</h1>
      <h1 className="seven-hour-temp">{props.temp}°F</h1>
      <img className="seven-hour-icon" src={require(`./img/${props.icon}.png`)}/>
    </div>
  )
}

export default SevenHourCard;