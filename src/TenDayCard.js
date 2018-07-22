import React, { Component } from 'react';

const TenDayCard = (props) => {
    console.log(props.day)
    return (
    <div>
      <h1>{props.day}</h1>
      <h1>{props.date}</h1> 
      <h1>{props.high}ºF</h1>
      <h1>{props.low}ºF</h1>
    </div>
  )
}

export default TenDayCard;