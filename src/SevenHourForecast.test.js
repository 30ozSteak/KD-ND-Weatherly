import React from 'react';
import { mount, shallow } from 'enzyme';
import SevenHourForecast from './SevenHourForecast';

describe('SevenHourForecast', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SevenHourForecast weather={ []  }/>);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should return the information to the card', () => {
    expect(wrapper.find('div').length).toEqual(1);
  })

  // it('should take in properties', () => {
  //   expect(wrapper.find(test)).toEqual('passing')
  // })
})