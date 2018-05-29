import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import NameForm from './components/NameForm.js';

class App extends Component {

  state = {
    //unneccessary to have playerIsSet? just check if name has value? 
    playerIsSet: false,
    nameOfPlayer: ''
  }

  handleNameForm = (value) => {
    this.setState({playerIsSet: true, nameOfPlayer: value});
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.playerIsSet ? (
          <div>
            Player: {this.state.nameOfPlayer}
          </div>
          ) : (
          <NameForm handleNameForm={this.handleNameForm}/>
          )}
        
        
      </div>
    );
  }
}

export default App;
