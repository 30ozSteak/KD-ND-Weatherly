import React, { Component } from 'react';
import {cityData} from './cityData';
import {Trie} from './CompleteMe';

class Search extends Component {
  constructor(props) {
    super(props)
    this.trie = new Trie();
    this.state = {
      userInput: '',
      suggest: '',
      showSuggest: false
    }
  }
  
  componentWillMount() {
    cityData.data.forEach(city => {
      this.trie.insert(city)
    })
  }

  getAutoComplete(location) {
    if (location !== '') {
      let autoSuggest = this.trie.find(location)
      this.setState({
        suggest: autoSuggest,
        showSuggest: true
      })
    }
  }

  render(){
    return (
      <form >
        <input 
          className = 'search-bar'
          list = 'cities'
          type = 'text' 
          placeholder = 'Search by City/State, Zip - Then Press Enter' 
          value = { this.state.userInput }
          onChange={ (e) => {
            this.getAutoComplete(e.target.value)
            this.setState( {userInput: e.target.value})
          }   
        }
        />
        {this.state.showSuggest === true && <datalist id="cities">
          <option value={this.state.suggest[0]} />
          <option value={this.state.suggest[1]} />
          <option value={this.state.suggest[2]} />
          <option value={this.state.suggest[3]} />
          <option value={this.state.suggest[4]} />
          <option value={this.state.suggest[5]} />
        </datalist>
        }
        <button 
          className = 'magic-button'
          onClick={(e) => { 
          e.preventDefault()
          this.props.setLocation(this.state.userInput)
          this.setState({
            userInput: '',
            showSuggest: false
          })
        }}
        ><i className="fas fa-caret-down"></i>
        </button>
        <section className="home-block">
          <p className="seven-hour-button" onClick={this.props.setSevenHour}>Hourly</p> 
          <i className="fas fa-home"
            onClick={(e) => {
            e.preventDefault()
            this.props.findHome()
          }}></i>
          <p className="ten-day-button" onClick={this.props.setTenDay}>Daily</p>
        </section>
      </form>
    )
  }
}

export default Search;