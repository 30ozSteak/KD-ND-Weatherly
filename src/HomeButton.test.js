import React from 'react';
import { mount, shallow } from 'enzyme';
import HomeButton from './HomeButton';

describe('HomeButton', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HomeButton />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should have a default state', () => {
    expect(wrapper.state()).toEqual({})
  })

  it('should change state on click', () => {
    let mockFn = jest.fn();
    
    wrapper = mount(<HomeButton updateLocalStorage = {mockFn} />)

    let submitButton = wrapper.find('p');

    submitButton.simulate('click');

    expect(mockFn).toHaveBeenCalled();
  })
})