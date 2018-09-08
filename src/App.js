import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import PlayerStats from './components/PlayerStats.js';
import NameForm from './components/NameForm.js';
import Clicker from './components/Clicker.js';

import CellPhone from './components/upgrades/CellPhone.js';
import Extentions from './components/upgrades/Extentions.js';
import Nicole from './components/upgrades/Nicole.js';
import Tinkerbell from './components/upgrades/Tinkerbell.js';

class App extends Component {

  state = {
    //unneccessary to have playerIsSet? just check if name has value? 
    playerIsSet: false,
    nameOfPlayer: '',
    totalPoints: 0,
    fame: 0,
    pointsPerClick: 1,
    pointsPerSecond: 0,
    dateStart: "",
    automaticPointsMessage: ""
  }

  handleNameForm = (value) => {
    this.setState({playerIsSet: true, nameOfPlayer: value});
  }

  increaseTotalPoints = () => {
    this.setState({totalPoints: this.state.totalPoints +  this.state.pointsPerClick});
  }

  removeFromTotalPoints = (cost) => {
    this.setState({totalPoints: this.state.totalPoints - cost});
  }

  updatePointsPerClick = (effect) => {
    this.setState({pointsPerClick: this.state.pointsPerClick + effect});
  }

  updatePointsPerSecond = (effect) => {
    if (this.state.pointsPerSecond === 0) {
      //if its the first time user buys automatically generated points, 
      //store the time of the event in this.state to be able to calculate seconds passed and increase total points based on that
      this.setState({
        dateStart: new Date(),
        automaticPointsMessage: "Congratulations you bought your first automatic update!!"
      });

      console.log('first update: ' + this.state.dateStart);
    }
    
    this.setState({pointsPerSecond: this.state.pointsPerSecond + effect});
  }

  makeAnUpgrade = (cost, auto, effect) => {
    this.removeFromTotalPoints(cost);
    //if automatic update update generated point, else update points per click
    auto ? this.updatePointsPerSecond(effect) : this.updatePointsPerClick(effect);
  }

  //WIP
  //make every 10 seconds?
  automaticUpdate = () => {
    let dateNow = new Date();
    let secondsPassed = dateNow - this.state.dateStart;
    secondsPassed /= 1000;
    let automaticallyEarnedPoints = secondsPassed * this.state.pointsPerSecond;
    let newFame = automaticallyEarnedPoints + this.state.totalPoints;

    this.setState({fame: newFame});
    console.log("seconds passed " + secondsPassed);
    console.log('automatically earned points ' + automaticallyEarnedPoints);
  }


  render() {
    const { nameOfPlayer, totalPoints, fame, pointsPerClick, pointsPerSecond, automaticPointsMessage } = this.state;

    if(this.state.pointsPerSecond > 0) { 
      setTimeout(this.automaticUpdate, 2500);
    }

    return (
      <div className="App">

          {this.state.playerIsSet ? (  
            <div class="wrapper">       
              <Header />

              <PlayerStats
                nameOfPlayer={nameOfPlayer} 
                totalPoints={totalPoints} 
                fame={fame}
                pointsPerClick={pointsPerClick}
                pointsPerSecond={pointsPerSecond}
                automaticPointsMessage={automaticPointsMessage} />

              <Clicker onClick={this.increaseTotalPoints}/>

              <div className="upgrades">
                <h2>Upgrades</h2>
                <div className="upgrades-wrapper">
                  <Extentions makeAnUpgrade={this.makeAnUpgrade} totalPoints={totalPoints}/>
                  <CellPhone makeAnUpgrade={this.makeAnUpgrade} totalPoints={totalPoints}/>
                  <Nicole makeAnUpgrade={this.makeAnUpgrade} totalPoints={totalPoints}/> 
                  <Tinkerbell makeAnUpgrade={this.makeAnUpgrade} totalPoints={totalPoints}/>

                </div>
              </div>
            </div>

            ) : (

            <div>
              <Header />
              <NameForm handleNameForm={this.handleNameForm} />
            </div>

          )}
          
      </div>
    );
  }
}

export default App;
