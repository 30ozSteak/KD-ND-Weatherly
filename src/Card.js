import React, { Component } from 'react';

const Card = (props) => {
    console.log(props.day)
    return (
    <div>
      <h1>{props.day}</h1>
      <h1>{props.date}</h1> 
      <h1>{props.high}•F</h1>
      <h1>{props.low}•F</h1>
    </div>
  )
}

export default Card;