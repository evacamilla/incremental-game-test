import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import NameForm from './components/NameForm.js';
import Button from './components/Button.js';
import CellPhone from './components/CellPhone.js';
import Extentions from './components/Extentions.js';
import Nicole from './components/Nicole.js';

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

  updatePointsPerClick = (effect) => {
    this.setState({pointsPerClick: this.state.pointsPerClick + effect});
  }

  makeAnUpdate = (cost, effect) => {
    this.removeFromTotalPoints(cost);
    this.updatePointsPerClick(effect);
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
            <h3>Ppc: {this.state.pointsPerClick}</h3>
            <Button onClick={this.increaseTotalPoints} value="Click me" />
            <br/>
            <CellPhone makeAnUpdate={this.makeAnUpdate}/>
            <Extentions makeAnUpdate={this.makeAnUpdate}/>
            <Nicole /> 
          </div>
          ) : (
          <NameForm handleNameForm={this.handleNameForm}/>
          )}
        
        
      </div>
    );
  }
}

export default App;
