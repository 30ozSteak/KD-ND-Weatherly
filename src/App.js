import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';
import Search from './Search';
import CurrentWeather  from './CurrentWeather';
import Card from './Card';
import Key from './Key';
import SevenHourForecast from './SevenHourForecast';
import TenDayForecast from './TenDayForecast';
import {currWeatherData} from './DataScrape';

class App extends Component {
  constructor(){
    super();
    this.state = {
      userLocation: '',
      state: 'co',
      time: '',
      date: '',
      CurrentWeather: {},
      SevenHourForecast: [],
      TenDayForecast: [],
    }
  }

  componentDidMount() {
    this.importLocation('Denver, co');
  }

  importLocation(location) {
    const url= `http://api.wunderground.com/api/${Key}/conditions/hourly/forecast10day/q/${location}.json`

    console.log(url)
    fetch(url).then(response => response.json())
    .then(res => {
      const newWeather = currWeatherData(res)
      this.setState({
        userLocation: newWeather.location,
        CurrentWeather: newWeather,
      })
    })
    .catch(error => {
      throw new Error(error)
    })
  }
  

  render() {
    return (
      <div className="App">
        <Welcome />
        <Search setLocation={(location) => this.importLocation(location)} />
        <SevenHourForecast />
        <TenDayForecast />
        <Card />
        <CurrentWeather weather={this.state.CurrentWeather}/>
      </div>
    );
  }
}

export default App;