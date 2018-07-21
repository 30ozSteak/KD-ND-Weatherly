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
      userLocation: 'Denver',
      state: 'co',
      time: '',
      date: '',
      CurrentWeather: {},
      SevenHourForecast: [],
      TenDayForecast: [],
    }
  }

  componentDidMount() {
    this.importLocation();
  }

  importLocation() {
    let zip = this.state.userLocation;
    let state = this.state.state;
    const url= `http://api.wunderground.com/api/${Key}/conditions/hourly/forecast10day/q/${state}/${zip}.json`

    fetch(url).then(response => response.json()).then(response => {
      console.log(response)
      let newWeather = currWeatherData(response)
      this.setState({
        CurrentWeather: newWeather,
      })
    }) 
    .catch(error => {
      throw new Error(error)
    })
  }

  setLocation = (location) => {
    let newLocation = location

    this.setState( { 
      userLocation: newLocation 
    }, this.importLocation())

  }
  

  render() {
    return (
      <div className="App">
        <Welcome />
        <Search setLocation={this.setLocation} />
        <SevenHourForecast />
        <TenDayForecast />
        <Card />
        <CurrentWeather />
      </div>
    );
  }
}

export default App;