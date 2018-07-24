import React from 'react';
import SevenHourCard from './SevenHourCard';

const SevenHourForecast = (props) => {
  return (
    <div className = 'seven-hour-weather'>
      {props.weather.slice(0, 7).map((hour, i) => {
        console.log(props.weather)
        return (
          <SevenHourCard 
            key={`hour${i}`}
            time={ hour.FCTTIME.civil}
            temp={ hour.temp.english }
            icon={ hour.icon }
            />
          )}
        )}
      </div>
    )
  }

export default SevenHourForecast;

// <a onClick = {this.props.setSevenHour|}

// setSevenHour = () => {
//   this.setState({
//     welcome: false,
//     showCurrentWeather: true,
//     showSevenHour: true;
//   })
// }