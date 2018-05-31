import React, { Component } from 'react';
import UpgradeButton from './UpgradeButton.js';
import UpgradeDescription from './UpgradeDescription.js';

class Tinkerbell extends Component {
    state = {
        title: 'Tinkerbell',
        description: 'gewewhw',
        imgUrl: 'url(https://cms.barstoolsports.com/wp-content/uploads/2015/04/Screen-Shot-2015-04-22-at-3.14.34-PM.png)',
        cost: 400,
        auto: false,
        effect: 100,
        timesUpgraded: 0,
        activated: false
    }

    handleUpgrade = (event) => {
        //send cost + increasedPoints to change state in App.js
        this.props.makeAnUpgrade(this.state.cost, this.state.auto, this.state.effect);

        //change state here.. effect*0.90^timesUpgrades
        let newEffect = this.state.effect * 0.95 ^ this.state.timesUpgraded;
        this.setState({
            effect: newEffect,
            timesUpgraded: this.state.timesUpgraded + 1
        });

        //some animation

    }

    render(){
        let activeOrNot = 'not-active'
        this.state.activated ? (
            activeOrNot = 'active'
        ) :( activeOrNot = 'not-active'); 
        return(
            <div>
                <UpgradeButton toggle={activeOrNot} imgUrl={this.state.imgUrl} onClick={this.handleUpgrade} />
                <UpgradeDescription 
                    title={this.state.title} 
                    effect={this.state.effect} 
                    description={this.state.description} 
                    cost={this.state.cost} 
                />
            </div>
        );
    }
}


export default Tinkerbell;