export const currWeatherData = data => {
  const currentDay = data.forecast.simpleforecast.forecastday.find(currentDay => currentDay.period === 1)
  const currentDayObj = { 
    time: data.current_observation.observation_time, 
    location: data.current_observation.display_location.full, 
    current: Number.parseInt(data.current_observation.temp_f) + '°F', 
    high: Number.parseInt(currentDay.high.fahrenheit) + '°F', 
    low: Number.parseInt(currentDay.low.fahrenheit) + '°F', 
    conditions: currentDay.conditions, 
    icon: currentDay.icon 
  }
  return  currentDayObj;
}

