import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';
import Search from './Search';
import CurrentWeather  from './CurrentWeather';
import TenDayCard from './TenDayCard';
import SevenHourCard from './SevenHourCard';
import Key from './Key';
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
        TenDayForecast: res.forecast.simpleforecast.forecastday
      })
    })
    .catch(error => {
      alert('Please enter a valid location')
    })
  }
  

  render() {
    return (
      <div className="App">
        <Welcome />
        <Search setLocation={(location) => this.importLocation(location)} />
        <h1>Seven Hour Forecast</h1>
        <SevenHourForecast weather={this.state.SevenHourForecast}/>
        <TenDayForecast weather={this.state.TenDayForecast}/>
        <CurrentWeather weather={this.state.CurrentWeather}/>
      </div>
    );
  }
}

export default App;