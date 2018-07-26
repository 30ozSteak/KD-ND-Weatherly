import React from 'react';
import { mount, shallow } from 'enzyme';
import SevenHourForecast from './SevenHourForecast';

describe('SevenHourForecast', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SevenHourForecast weather={ [] } />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })
})