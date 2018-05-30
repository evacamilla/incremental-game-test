import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import NameForm from './components/NameForm.js';
import Button from './components/Button.js';
import Update from './components/Update.js'

class App extends Component {

  state = {
    //unneccessary to have playerIsSet? just check if name has value? 
    playerIsSet: false,
    nameOfPlayer: '',
    totalPoints: 0,
    pointsPerClick: 1,
    generatedPointsPerSecond: 0
  }

  handleNameForm = (value) => {
    this.setState({playerIsSet: true, nameOfPlayer: value});
  }

  increaseTotalPoints = () => {
    this.setState({totalPoints: this.state.totalPoints + this.state.pointsPerClick});
  }

  //this + increaseTotalPoints should be made as one function
  removeFromTotalPoints = () => {
    let cost = 10;
    this.setState({totalPoints: this.state.totalPoints - cost});
  }

  updatePointsPerClick = () => {
    let increasedPointsPerClick = 3;
    this.setState({pointsPerClick: this.state.pointsPerClick + increasedPointsPerClick});
  }

  makeAnUpdate = () => {
    this.removeFromTotalPoints();
    this.updatePointsPerClick();
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
              Points: {this.state.totalPoints}
            </h3>
            <p>Ppc: {this.state.pointsPerClick}</p>
            <Button onClick={this.increaseTotalPoints} value="Click me" />
            <Button onClick={this.makeAnUpdate} value="Update" />
            <br/>
            <Update />

          </div>
          ) : (
          <NameForm handleNameForm={this.handleNameForm}/>
          )}
        
        
      </div>
    );
  }
}

export default App;
