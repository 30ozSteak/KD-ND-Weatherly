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
      specialDisplay: true
    }
  }

  componentDidMount() {
    this.importLocation('');
  }

  importLocation(location) {
    const url= `http://api.wunderground.com/api/${Key}/conditions/hourly/forecast10day/q/${location}.json`

<<<<<<< HEAD
    console.log(url)
=======
>>>>>>> 9a5e800588d50462a00e7b2407e4f9a8a494ef37
    fetch(url).then(response => response.json())
    .then(res => {
      const newWeather = currWeatherData(res)
      this.setState({
        userLocation: newWeather.location,
        CurrentWeather: newWeather,
        TenDayForecast: res.forecast.simpleforecast.forecastday,
        SevenHourForecast: res.hourly_forecast
      })
    })
    // this needs to be updated and an issue created
    // .catch(error => {
    //   alert('Please enter a valid location')
    // })
  }

  //function to evaluate weather
  //if statement 'current'
  //  else if 'tenday'
  //  else if 'sevenHour'
  //  else renders welcome
  
  //function changeWeather (*arguement*)
  //  this.setstate ({typeOfWeather: *arguement*})


  // hideElement = () => {
  //   this.setState({
  //     specialDisplay: false
  //   })
  // }
  // Not working yet


  render() {
    if(this.state.userLocation){
      return (
        <div className="app">
          <Welcome />
          <CurrentWeather weather={this.state.CurrentWeather}/>
          {/* <div onClick={this.hideElement}></div> this function doesn't work, but it's close....*/}
          <Search setLocation={(location) => this.importLocation(location)} />
          <SevenHourForecast weather={this.state.SevenHourForecast}/>
          <TenDayForecast weather={this.state.TenDayForecast}/>
          {/* <div className = "toggle-display">
          <p onClick = {this.hideElement}>7Hour</p>
          <p>|</p>
          <p onClick = {this.hideElement}>10-day</p>
        </div> */}
        {/* not working yet either */}
        </div>
      );
    }
    return (
      <div className = "app">
        <Welcome />
        <Search setLocation={(location) => this.importLocation(location)} />
      </div>
    )
  }
}

export default App;