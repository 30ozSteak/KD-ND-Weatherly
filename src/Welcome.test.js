import React from 'react';
import { mount, shallow } from 'enzyme';
import Welcome from './Welcome.js';

describe('Welcome', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Welcome />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render a message welcoming the user to the page', () => {
    expect(wrapper.find('h1').length).toEqual(1);
  });

  it('should display a link to the Github repo where this project is saved', () => {
    expect(wrapper.find('i').length).toEqual(1);
  });
});