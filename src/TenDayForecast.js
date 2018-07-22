import React from 'react';
import Card from './Card';

const TenDayForecast = (props) => {
  return (
  <div className = 'tenDayWeather'>
    {props.weather.map((day, i) => {
      return <Card key={`day${i}`} 
              day={day.date.weekday}
              date={`${day.date.month}/${day.date.day}/${day.date.year}`}
              high={day.high.fahrenheit} 
              low={day.low.fahrenheit}/>
    })}
  </div>
  )
}
  
export default TenDayForecast;