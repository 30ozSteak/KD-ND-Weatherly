import React from 'react';
import { mount, shallow } from 'enzyme';
import Search from './search.js';

describe('Search', () => {
  let search;

  beforeEach(() => {
    search = shallow(<Search />);
  });

  it('should exist', () => {
    expect(search).toBeDefined();
  });

  it('should have userInput default to an empty string', () => {
    expect(search.state().userInput).toEqual('');
  });

  it('should render a form that houses our input field', () => {
    expect(search.find('form').length).toEqual(1);
  });

  it('should render an input field', () => {
    expect(search.find('input').length).toEqual(1);
  });

  it('should change its state once a user inputs a location', () => {
    let userInput = search.find('input');
    let event = {
      target: {
        value: 'denver'
      }
    }
    userInput.simulate('change', event);
    expect(search.state().userInput).toEqual('denver');
  })

  it('should display autocomplete when user enters a value into the input', () => {
    expect(search.state().showSuggest).toEqual(false)
    
    search.instance().getAutoComplete('denver, co')
    
    expect(search.state().showSuggest).toEqual(true)
  })

  // another test: are we getting the amount of options that is in our suggest method
});