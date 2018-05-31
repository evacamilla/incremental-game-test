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
    pointsPerSecond: 0
  }

  handleNameForm = (value) => {
    this.setState({playerIsSet: true, nameOfPlayer: value});
  }

  increaseTotalPoints = (props) => {
    this.setState({totalPoints: this.state.totalPoints + props});
  }

  //this + increaseTotalPoints should be made as one function
  removeFromTotalPoints = (cost) => {
    this.setState({totalPoints: this.state.totalPoints - cost});
  }

  //make one function out of these??
  updatePointsPerClick = (effect) => {
    this.setState({pointsPerClick: this.state.pointsPerClick + effect});
  }

  updatePointsPerSecond = (effect) => {
    this.setState({pointsPerSecond: this.state.pointsPerSecond + effect});
  }

  makeAnUpgrade = (cost, auto, effect) => {
    this.removeFromTotalPoints(cost);
    //if automatic update update generated point, else update points per click
    auto ? this.updatePointsPerSecond(effect) : this.updatePointsPerClick(effect);
  }

  render() {
    return (
      <div className="App">
        {this.state.playerIsSet ? (  
          <div>        
            <Header 
              nameOfPlayer={this.state.nameOfPlayer} 
              totalPoints={this.state.totalPoints} 
              pointsPerClick={this.state.pointsPerClick}
              pointsPerSecond={this.state.pointsPerSecond}
            />
            
            <Button 
              onClick={() => this.increaseTotalPoints(this.state.pointsPerClick)} 
              backgroundImage='url(http://reversespeech.s3.amazonaws.com/imgs/paris-hilton-celibate.jpg)'
              className='clicker'
            />

            <CellPhone makeAnUpgrade={this.makeAnUpgrade}/>
            <Extentions makeAnUpgrade={this.makeAnUpgrade}/>
            <Nicole makeAnUpgrade={this.makeAnUpgrade}/> 
            <Tinkerbell makeAnUpgrade={this.makeAnUpgrade}/>
          </div>
          ) : (
          <div>
            <Header />
            <NameForm handleNameForm={this.handleNameForm}/>
          </div>
        )}
      </div>
    );
  }
}

export default App;
