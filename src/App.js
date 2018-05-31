import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import NameForm from './components/NameForm.js';
import Button from './components/Button.js';
import CellPhone from './components/CellPhone.js';
import Extentions from './components/Extentions.js';
import Nicole from './components/Nicole.js';
import Tinkerbell from './components/Tinkerbell.js';

class App extends Component {

  state = {
    //unneccessary to have playerIsSet? just check if name has value? 
    playerIsSet: false,
    nameOfPlayer: '',
    totalPoints: 0,
    fame: 0,
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
  removeFromTotalPoints = (cost) => {
    this.setState({totalPoints: this.state.totalPoints - cost});
  }

  //make one function out of these??
  updatePointsPerClick = (effect) => {
    this.setState({pointsPerClick: this.state.pointsPerClick + effect});
  }

  updateGeneratedPoints = (effect) => {
    this.setState({generatedPointsPerSecond: this.state.generatedPointsPerSecond + effect});
  }

  makeAnUpgrade = (cost, auto, effect) => {
    this.removeFromTotalPoints(cost);

    auto ? (
      this.updateGeneratedPoints(effect)
      ) : (
      this.updatePointsPerClick(effect)
    );
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
            <h3>
              Ppc: {this.state.pointsPerClick}
              </h3>
            <h3>
              Generated: {this.state.generatedPointsPerSecond}
              </h3>
            <Button onClick={this.increaseTotalPoints} value="Click me" />
            <br/>
            <CellPhone makeAnUpgrade={this.makeAnUpgrade}/>
            <Extentions makeAnUpgrade={this.makeAnUpgrade}/>
            <Nicole makeAnUpgrade={this.makeAnUpgrade}/> 
            <Tinkerbell makeAnUpgrade={this.makeAnUpgrade}/>
          </div>
          ) : (
          <NameForm handleNameForm={this.handleNameForm}/>
          )}
        
        
      </div>
    );
  }
}

export default App;
