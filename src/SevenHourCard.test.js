import React from 'react';
import { mount, shallow } from 'enzyme';
import SevenHourCard from './SevenHourCard.js'

describe('SevenHourCard', () => {
  let wrapper;
 
  beforeEach(() => {
    wrapper = shallow( <SevenHourCard time = "5pm" temp ="9001" icon = "Cloudy" /> )
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render to the page properly', () => {
    const sevenHourCard = wrapper.find('.seven-hour-section');
    const sevenHourCardTime = wrapper.find('.seven-hour-time');
    const sevenHourCardTemp = wrapper.find('.seven-hour-temp');
    const sevenHourCardImg = wrapper.find('.seven-hour-icon');

    expect (sevenHourCard).toBeDefined();
    expect (sevenHourCardTime).toBeDefined();
    expect (sevenHourCardTemp).toBeDefined();
    expect (sevenHourCardImg).toBeDefined();
    expect (sevenHourCardTime.text()).toEqual("5pm");
    expect (sevenHourCardTemp.text()).toEqual("9001" + '°F');
  })
})