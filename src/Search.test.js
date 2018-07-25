import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import Search from './search.js';


describe('Search', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Search />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have userInput default to an empty string', () => {
    expect(wrapper.state().userInput).toEqual('');
  });

  it('should change its state once a user inputs a location', () => {
    
  })
});