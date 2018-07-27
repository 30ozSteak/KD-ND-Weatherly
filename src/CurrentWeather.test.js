import React from 'react';
import { mount, shallow } from 'enzyme';
import CurrentWeather from './CurrentWeather';

describe('CurrentWeather', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<CurrentWeather weather = { {icon: 'sleet'} }/>);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })
})