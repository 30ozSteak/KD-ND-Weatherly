import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super()
    this.state = {
      userInput: ''
    }
    // this.getInput = this.getInput.bind(this)
  }


  render(){
    return (
      <div className = 'search'>
        <h1 className = 'title'> Weatherly </h1>
          <input type = 'text' 
            placeholder = 'Search for a city' 
            value = { this.state.userInput }
            onChange={ this.getInput }
          />
      </div>
    )
  }
}

export default Search;