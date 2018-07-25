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
          <p 
            className = 'set-home-button'
            onClick={(e) => { 
            e.preventDefault()
            this.props.updateLocalStorage();
            this.setState({
            })
          }}
          >Set Home</p>
      </form>
    )
  }
}

export default HomeButton;