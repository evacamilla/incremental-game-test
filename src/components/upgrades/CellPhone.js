import React, { Component } from 'react';
import UpgradeDiv from '../UpgradeDiv.js';

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
        if(this.props.totalPoints > this.state.cost){
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
        } else {
            console.log("You don't have enough money to update");
        }
    }

    render(){
        let activeOrNot = 'not-active';
        if(this.props.totalPoints > this.state.cost){
            activeOrNot = 'active';
        }
        return(
            <div className="upgrade">
                <UpgradeDiv 
                    activeOrNot={activeOrNot} 
                    imgUrl={this.state.imgUrl} 
                    onClick={this.handleUpgrade} 
                    effect={this.state.effect}  
                    cost={this.state.cost} />
            </div>
        );
    }
}

export default CellPhone;