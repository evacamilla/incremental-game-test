import React, { Component } from 'react';
import UpgradeButton from './UpgradeButton.js';
import UpgradeDescription from './UpgradeDescription.js';

class Extentions extends Component {
    state = {
        title: 'Extensions',
        description: 'gewewhw',
        imgUrl: 'url(https://www.rapunzelofsweden.se/20.0.0.2/20541/cache/20541_77b54bc7394a3d07b67514e79b888e37.jpg)',
        cost: 10,
        auto: false,
        effect: 1,
        timesUpgraded: 1,
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


export default Extentions;