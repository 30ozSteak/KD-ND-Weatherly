export const currentWeather = data => {
  const currentDay = data.forecast.simpleforecast.forecastday.find(currentDay => currentDay.period === 1)
  const currentDayObj = { time: data.current_observation.observation_time, location: data.current_observation.display_location.full, current:data.current_observation.temp_f + '•F', high: currentDay.high.fahrenheit + '•F', low: currentDay.low.fahrenheit + '•F', conditions: currentDay.conditions, icon: currentDay.icon_url }
  return  currentDayObj;
}

