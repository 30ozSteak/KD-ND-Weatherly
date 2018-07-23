import React from 'react';
import SevenHourCard from './SevenHourCard';

const SevenHourForecast = (props) => {
  return (
    <div className = 'sevenDayWeather'>
      {props.weather.map((hour, i) => {
        return (
          <SevenHourCard hour={`hour${i}`}
                         time={hour.time}
                         temp={ `{hour.temp}º` }
                         condition={hour.condition}
                         icon={hour.icon}
                         />
                )
              }
            )
          }
    </div>
  )
}

export default SevenHourForecast;