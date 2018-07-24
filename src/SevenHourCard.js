import React, { Component } from 'react';

const SevenHourCard = (props) => {
  return (
    <div>
      <h1>{props.time}</h1>
      <h1>{props.temp}ºF</h1>
      <img className="seven-hour-icon" src={require(`./img/${props.icon}.png`)}/>
    </div>
  )
}

export default SevenHourCard;