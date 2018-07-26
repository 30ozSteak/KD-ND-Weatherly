import React from 'react';
import { mount, shallow } from 'enzyme';
import TenDayCard from './TenDayCard.js'

describe('TenDayCard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow( <TenDayCard key = 'day' day = "Monday" date = "5/1/2018" high="98" low = "7" icon = "Cloudy" /> )
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render to the page properly', () => {
    const tenDayCard = wrapper.find('.ten-day-weather');
    const tenDayCardDay = wrapper.find('.ten-day-day');
    const tenDayCardHigh = wrapper.find('.ten-day-high');
    const tenDayCardLow = wrapper.find('.ten-day-low');
    const tenDayCardIcon = wrapper.find('.ten-day-icon');

    expect (tenDayCard).toBeDefined();
    expect (tenDayCardDay).toBeDefined();
    expect (tenDayCardDay.text()).toEqual("Monday");
    expect (tenDayCardLow).toBeDefined();
    expect (tenDayCardLow.text()).toEqual('|L: 7°F')
    expect (tenDayCardHigh).toBeDefined();
    expect (tenDayCardHigh.text()).toEqual('H: 98°F')
    expect (tenDayCardIcon).toBeDefined();
  })
})