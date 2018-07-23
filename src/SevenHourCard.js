import React, { Component } from 'react';

const SevenHourCard = (props) => {
  console.log(props.day)
  return (
    <div>
      <h1>{props.day}</h1>
      <h1>{props.date}</h1>
      <h1>{props.temp}ºF</h1>
    </div>
  )
}

export default SevenHourCard;