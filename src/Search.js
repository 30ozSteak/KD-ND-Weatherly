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
          <input 
            className = 'search-bar'
            type = 'text' 
            placeholder = 'Search by City/State/Zip' 
            value = { this.state.userInput }
            onChange={ (e) =>
              this.setState( {userInput: e.target.value})
             }
            />
          <button 
            className = 'magic-button'
            onClick={(e) => { 
            e.preventDefault()
            this.props.setLocation(this.state.userInput)
            this.setState({
              userInput: ''
            })
            
          }}
          ></button>
      </form>
    )
  }
}

export default Search;