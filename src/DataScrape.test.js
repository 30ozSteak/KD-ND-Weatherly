import React from 'react';
import { mount, shallow } from 'enzyme';
import { currWeatherData } from './DataScrape';
import { data } from './MockData';

describe('DataScrape', () => {
  it('should exist', () => {
    expect(currWeatherData).toBeDefined();
  })

  it('should return the data filtered out but the method', () => {
    let wrapper = mount(<currWeatherData />)
    let cleanData = currWeatherData(data);

    expect(cleanData).toEqual({
      "conditions": "Partly Cloudy", 
      "current": "46°F", 
      "high": "51°F", 
      "icon": "partlycloudy", 
      "location": "Louisville, KY", 
      "low": "32°F", 
      "time": "Last Updated on December 20, 11:27 AM EST"
    })
  })
})