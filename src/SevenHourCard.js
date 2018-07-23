import React, { Component } from 'react';

const SevenHourCard = (props) => {
  console.log(props.day)
  return (
    <div>
      <h1>{props.time}</h1>
      <h1>{props.temp}ºF</h1>
      <img src={props.icon}/>
    </div>
  )
}

export default SevenHourCard;