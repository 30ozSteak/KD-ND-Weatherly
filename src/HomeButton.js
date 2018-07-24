import React, {Component} from 'react';
import App from './App';

class HomeButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render(props){
    return (
      <form >
          <button 
            className = 'home-button'
            onClick={(e) => { 
            e.preventDefault()
            this.props.updateLocalStorage();

            this.setState({
            })
          }}
          >Home</button>
      </form>
    )
  }
}

export default HomeButton;