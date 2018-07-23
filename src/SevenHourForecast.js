import React from 'react';
import SevenHourCard from './SevenHourCard';

const SevenHourForecast = (props) => {
  return (
    <div className = 'seven-hour-weather'>
      {props.weather.slice(0, 7).map((hour, i) => {
        return (
          <SevenHourCard key={`hour${i}`}
                         time={hour.FCCTIME}
                         temp={ hour.temp.english }
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