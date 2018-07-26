import React from 'react';
import { mount, shallow } from 'enzyme';
import TenDayForecast from './TenDayForecast';

describe('TenDayForecast', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TenDayForecast weather={ [] } />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should return the information to the card', () => {
    expect(wrapper.find('div').length).toEqual(1);
  })
})