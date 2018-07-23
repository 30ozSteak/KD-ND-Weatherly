import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';
import Search from './Search';
// import TenDayCard from './TenDayCard';
// import SevenHourCard from './SevenHourCard';
import Key from './Key';
import CurrentWeather  from './CurrentWeather';
import SevenHourForecast from './SevenHourForecast';
import TenDayForecast from './TenDayForecast';
import {currWeatherData} from './DataScrape';

class App extends Component {
  constructor(){
    super();
    this.state = {
      userLocation: '',
      time: '',
      date: '',
      CurrentWeather: {},
      SevenHourForecast: [],
      TenDayForecast: [],
      // typeOfWeather: ''
    }
  }

  componentWillMount() {
    this.importLocation('Denver, co');
  }

  importLocation(location) {
    const url= `http://api.wunderground.com/api/${Key}/conditions/hourly/forecast10day/q/${location}.json`

    console.log(url)
    fetch(url).then(response => response.json())
    .then(res => {
      const newWeather = currWeatherData(res)
      console.log(res)
      this.setState({
        userLocation: newWeather.location,
        CurrentWeather: newWeather,
        TenDayForecast: res.forecast.simpleforecast.forecastday,
        SevenHourForecast: res.hourly_forecast
      })
    })
    .catch(error => {
      alert('Please enter a valid location')
    })
  }

  //function to evaluate weather
  //if statement 'current'
  //  else if 'tenday'
  //  else if 'sevenHour'
  //  else renders welcome
  
  //function changeWeather (*arguement*)
  //  this.setstate ({typeOfWeather: *arguement*})



  render() {
    return (
      <div className="app">
        <Welcome />
        <h1>Seven Hour Forecast</h1>
        <Search setLocation={(location) => this.importLocation(location)} />
        {/* <SevenHourForecast weather={this.state.SevenHourForecast}/>
        <TenDayForecast weather={this.state.TenDayForecast}/> */}
        <CurrentWeather weather={this.state.CurrentWeather}/>
      </div>
    );
  }
}

export default App;