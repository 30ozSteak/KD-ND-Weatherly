import React from 'react';
import { mount, shallow } from 'enzyme';
import TenDayForecast from './TenDayForecast';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TenDayForecast />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })
})