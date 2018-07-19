import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import Card from './Card';
import Key from './Key'

class App extends Component {
  constructor(){
    super();
    this.state = {
      userLocation: 'Denver',
      time: '',
      date: '',
      CurrentWeather: [],
      SevenHourForecast: [],
      TenDayForecast: [],
    }
  }

  chooseLocation = (location) => {
    location.preventDefault()
    this.setState( { userLocation: location } )
  }
  
  render() {
    return (
      <div className="App">
        <Welcome />
        <Search cityLocation={this.chooseLocation} />
      </div>
    );
  }
}

export default App;
