import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should have a default state', () => {
    expect(wrapper.state()).toEqual({   
      userLocation: '',
      time: '',
      date: '',
      CurrentWeather: {},
      SevenHourForecast: [],
      TenDayForecast: [],
      showSevenHour: false,
      showTenDay: false,
      showWelcomeMessage: true, });
  })

  it('should render Welcome and Search components', () => {
    expect(wrapper.find('Welcome').length).toEqual(1);
    expect(wrapper.find('Search').length).toEqual(1);
  })

  it('should render CurrentWeather and HomeButton instead of Welcome if the user has entered a location', () => {
    wrapper.setState( {userLocation: 'denver, co'} );

    expect(wrapper.find('Welcome').length).toEqual(0);
    expect(wrapper.find('CurrentWeather').length).toEqual(1);
    expect(wrapper.find('HomeButton').length).toEqual(1);
  })

  it('should store a location in local storage', () => {
    localStorage.clear();
    const location = 'denver, CO'

    wrapper.instance().setLocalStorage(location);

    expect(localStorage.store).toEqual({ "location": "\"denver, CO\"" });
  })

  it('should retrieve location from local storage and add it to the state', () => {
    localStorage.clear();
 
    localStorage.setItem(location, 'denver, co' )
    let localItem = localStorage.getItem('location')


    wrapper.setState({userLocation: localItem})
    expect(wrapper.state().userLocation).toEqual('Denver')
  })

  it('should load componentDidMount with a default empty string and make a fetch call', () => {
    wrapper = mount(<App />);

    expect(wrapper.state().userLocation).toEqual('');
  })

  it('should display the seven hour forecast', () => {
    expect(wrapper.state().showSevenHour).toEqual(false)

    wrapper.instance().setSevenHour();

    expect(wrapper.state().showSevenHour).toEqual(true)
  })

  it('shoud display the ten day forecast', () => {
    expect(wrapper.state().showTenDay).toEqual(false)

    wrapper.instance().setTenDay();

    expect(wrapper.state().showTenDay).toEqual(true)
  })
})