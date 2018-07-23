import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: ''
    }
  }

  render(){
    return (
      <form >
        <h1 className ='title'>Weatherly</h1>
          <input type ='text' 
            placeholder = 'Search for a city' 
            value = { this.state.userInput }
            onChange={ (e) =>
              this.setState( {userInput: e.target.value})
             }
            />
          <button 
            onClick={(e) => { 
            e.preventDefault()
            this.props.setLocation(this.state.userInput)
            this.setState({
              userInput: ''
            })
          }}
          >SUBMIT</button>
      </form>
    )
  }
}

export default Search;