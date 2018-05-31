import React, { Component } from 'react';
import UpgradeButton from './UpgradeButton.js';
import UpgradeDescription from './UpgradeDescription.js';

class CellPhone extends Component {
    state = {
        title: 'Cell phone',
        description: 'gewewhw',
        imgUrl: 'url(https://images-na.ssl-images-amazon.com/images/I/41QDbaubnHL._SX425_.jpg)',
        cost: 500,
        auto: true,
        effect: 0.2,
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

        //some animation + sound

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

export default CellPhone;