import React, { Component } from 'react';
import UpgradeDiv from '../UpgradeDiv.js';
import UpgradeDescription from '../UpgradeDescription.js';

class CellPhone extends Component {
    state = {
        title: 'Cell phone',
        description: 'gewewhw',
        imgUrl: 'https://i.pinimg.com/originals/7d/92/9f/7d929f6ffc9824938a46ad18a1585900.jpg',
        cost: 50,
        auto: true,
        effect: 2,
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
        let activeOrNot = 'not-active';
        if(this.props.totalPoints > this.state.cost){
            activeOrNot = 'active';
        }
        return(
            <div className="upgrade" id="cell-phone-wrapper">
                <UpgradeDiv activeOrNot={activeOrNot} imgUrl={this.state.imgUrl} onClick={this.handleUpgrade} />
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

export default CellPhone;