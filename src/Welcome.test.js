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

  it('should render a lovely message welcoming the user to the app', () => {
    expect(wrapper.find('h1').length).toEqual(1);
  });
});