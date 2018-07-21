import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import Card from './Card';
import Key from './Key';
import SevenHourForecast from './SevenHourForecast';
import TenDayForecast from './TenDayForecast';
import {currentWeather} from './DataScrape';

class App extends Component {
  constructor(){
    super();
    this.state = {
      userLocation: 'Denver',
      time: '',
      date: '',
      CurrentWeather: {},
      SevenHourForecast: [],
      TenDayForecast: [],
    }
  }

  importLocation() {
    const url= `http://api.wunderground.com/api/${Key}/geolookup/conditions/hourly/forecast10day/q/${this.state.userLocation}.json`
    
    fetch(url).then(response => response.json()).then(response => {
      this.setState({
        CurrentWeather: currentWeather(response),

      })
    }) 
    .catch(error => {
      throw new Error(error)
    })
  }

  chooseLocation = (location) => {
    this.setState( { userLocation: location }, this.importLocation )
    console.log(this.state.userLocation)

  }
  


  render() {
    return (
      <div className="App">
        <Welcome />
        <Search cityLocation={this.chooseLocation} />
        <SevenHourForecast />
        <TenDayForecast />
        <Card />
        <CurrentWeather />
      </div>
    );
  }
}

export default App;