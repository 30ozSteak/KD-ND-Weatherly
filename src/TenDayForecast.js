import React, { Component } from 'react';
import Card from './Card';

class TenDayForecast extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props)
    return (
      <div className = 'currentWeather'>
        {/* <h1>Ten Day{this.props.weather.city}</h1> */}
        {this.props.weather.map((day, i) => {
          return <Card key={`day${i}`} 
                  day={day.date.weekday}
                  date={`${day.date.month}/${day.date.day}/${day.date.year}`}
                  high={day.high.fahrenheit} 
                  low={day.low.fahrenheit}/>
        })}
      </div>
      )
    }
  }

export default TenDayForecast;