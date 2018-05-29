import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import NameForm from './components/NameForm.js';
import Button from './components/Button.js';

class App extends Component {

  state = {
    //unneccessary to have playerIsSet? just check if name has value? 
    playerIsSet: false,
    nameOfPlayer: '',
    points: 0
  }

  handleNameForm = (value) => {
    this.setState({playerIsSet: true, nameOfPlayer: value});
  }

  updatePoints = () => {
    this.setState({points: this.state.points + 1});
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.playerIsSet ? (
          <div>
            <h2>
              Player: {this.state.nameOfPlayer}
            </h2>
            <h3>
              Points: {this.state.points}
            </h3>
            <Button onClick={this.updatePoints} value="Click for points"/>
          </div>
          ) : (
          <NameForm handleNameForm={this.handleNameForm}/>
          )}
        
        
      </div>
    );
  }
}

export default App;
