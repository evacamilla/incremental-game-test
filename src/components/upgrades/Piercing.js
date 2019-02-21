import React, { Component } from 'react';
import UpgradeDiv from '../UpgradeDiv.js';

class Piercing extends Component {
    state = {
        title: 'Belly Button Piercing',
        description: 'gewewhw',
        imgUrl: 'https://sjedi5.com/magazin/wp-content/uploads/sites/3/2016/01/piercing-1.png',
        cost: 10,
        auto: false,
        effect: 1,
        timesUpgraded: 1,
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
                    title={this.state.title} 
                    effect={this.state.effect} 
                    cost={this.state.cost}
                    title={this.state.title} />
            </div>
        );
    }
}


export default Piercing;