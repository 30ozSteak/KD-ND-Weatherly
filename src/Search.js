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
            placeholder = 'Search by City/State, Zip - Then Press Enter' 
            value = { this.state.userInput }
            onChange={ (e) =>{
              e.preventDefault()
              this.setState( {userInput: e.target.value})
            }
              
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
          <h1 className="seven-hour-button" onClick={this.props.setSevenHour}>Hourly</h1> 
          <i className="fas fa-home"
            onClick={(e) => {
            e.preventDefault()
            this.props.findHome()
          }}></i>
          <h1 className="ten-day-button" onClick={this.props.setTenDay}>Daily</h1>
      </form>
    )
  }
}

export default Search;