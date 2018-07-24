import React from 'react';
import SevenHourCard from './SevenHourCard';

const SevenHourForecast = (props) => {
  return (
    <div className = 'seven-hour-weather'>
      {props.weather.slice(0, 7).map((hour, i) => {
        return (
          <SevenHourCard 
            key={`hour${i}`}
            time={ hour.FCTTIME.civil}
            temp={ hour.temp.english }
            icon={hour.icon_url}
            />
          )}
        )}
      </div>
    )
  }

export default SevenHourForecast;