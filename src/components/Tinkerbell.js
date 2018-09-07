import React, { Component } from 'react';
import UpgradeButton from './UpgradeButton.js';
import UpgradeDescription from './UpgradeDescription.js';

class Tinkerbell extends Component {
    state = {
        title: 'Tinkerbell',
        description: 'gewewhw',
        imgUrl: 'url(https://s7.ralphlauren.com/is/image/PoloGSI/s7-168187_lifestyle?$rl_392_pdp$)',
        cost: 400,
        auto: false,
        effect: 100,
        timesUpgraded: 0,
        activated: false
    }

    handleUpgrade = (event) => {
        //auto is for deciding if pointsPerSecond or pointsPerClick should be updated
        //send cost + effect to update states in App.js
        this.props.makeAnUpgrade(this.state.cost, this.state.auto, this.state.effect);

        //make the this.sta.teeffect less efficient for every upgrade
        //increase times upgraded/how many of the upgrade you have
        //effect*0.90^timesUpgrades
        let newEffect = this.state.effect * (0.99 * 0.99);
        this.setState({
            effect: newEffect,
            timesUpgraded: this.state.timesUpgraded + 1
        });

        //TODO: some animation

    }
    render(){
        let activeOrNot = 'not-active';
        if(this.props.totalPoints > this.state.cost){
            activeOrNot = 'active';
        }
        return(
            <div className="upgrade">
                <UpgradeButton activeOrNot={activeOrNot} imgUrl={this.state.imgUrl} onClick={this.handleUpgrade} />
                <div>{this.props.totalpoints}</div>
                <UpgradeDescription 
                    title={this.state.title} 
                    effect={this.state.effect} 
                    description={this.state.description} 
                    cost={this.state.cost} 
                    timesUpgraded={this.state.timesUpgraded}
                />
            </div>
        );
    }
}


export default Tinkerbell;