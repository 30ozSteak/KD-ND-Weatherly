export const currWeatherData = data => {
  const currentDay = data.forecast.simpleforecast.forecastday.find(currentDay => currentDay.period === 1)
  const currentDayObj = { 
    time: data.current_observation.observation_time, 
    location: data.current_observation.display_location.full, 
    current: data.current_observation.temp_f + 'ºF', 
    high: currentDay.high.fahrenheit + 'ºF', 
    low: currentDay.low.fahrenheit + 'ºF', 
    conditions: currentDay.conditions, 
    icon: currentDay.icon_url 
  }
  return  currentDayObj;
}

