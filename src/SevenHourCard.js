import React, { Component } from 'react';

const SevenHourCard = (props) => {
  return (
    <div>
      <h1>{props.time}</h1>
      <h1>{props.temp}ºF</h1>
      <img className="seveb-hour-icon" src={props.icon} />
    </div>
  )
}

export default SevenHourCard;