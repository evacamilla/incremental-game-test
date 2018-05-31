import React, { Component } from 'react';
import UpgradeButton from './UpgradeButton.js';
import UpgradeDescription from './UpgradeDescription.js';

class Extentions extends Component {
    state = {
        title: 'Extensions',
        description: 'gewewhw',
        imgUrl: 'url(https://i.pinimg.com/originals/f9/0e/00/f90e001e6aeef5d7cecfb0ebe3e76166.jpg)',
        cost: 400,
        type: '',
        effect: 100,
        timesUpgraded: 0,
        activated: false
    }

    handleUpgrade = (event) => {
        //send cost + increasedPoints to change state in App.js
        this.props.makeAnUpgrade(this.state.cost, this.state.effect);

        //change state here.. effect*0.90^timesUpgrades
        let newEffect = this.state.effect * 0.95 ^ this.state.timesUpgraded;
        this.setState({
            effect: newEffect,
            timesUpgraded: this.state.timesUpgraded + 1
        });

        //some animation

    }

    render(){
        return(
            <div>
                <br />
                <UpgradeButton imgUrl={this.state.imgUrl} onClick={this.handleUpgrade} />
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


export default Extentions;