import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: ''
    }
    // this.getInput = this.getInput.bind(this)
  }

  userInput = (event) => {
    this.setState( {userInput: event.target.value} )
    console.log(this.state.userInput)
  }

  render(){
    return (
      <div className = 'search'>
        <h1 className = 'title'> Weatherly </h1>
          <input type = 'text' 
            placeholder = 'Search for a city' 
            value = { this.state.userInput }
            onChange={ this.userInput }
            />
          <button onClick = { (e) => this.props.cityLocation(this.state.userInput) }>SUBMIT</button>
      </div>
    )
  }
}

export default Search;