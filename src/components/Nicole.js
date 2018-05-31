import React, { Component } from 'react';
import UpgradeButton from './UpgradeButton.js';
import UpgradeDescription from './UpgradeDescription';

class Nicole extends Component {
    state = {
        title: 'Nicole',
        description: 'gewewhw',
        imgUrl: 'url(https://images-production.global.ssl.fastly.net/uploads/photos/file/113795/nicole-richie-aug-2003.jpg)',
        cost: 1000,
        auto: false,
        effect: 320,
        timesUpgraded: 0,
        activated: true
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

export default Nicole;