import React, { Component } from 'react';
import UpgradeDiv from '../UpgradeDiv.js';

class Sunglasses extends Component {
    state = {
        title: 'Sunglasses',
        description: 'gewewhw',
        imgUrl: 'https://abshoelu.files.wordpress.com/2013/06/slw770_z42x.png?w=300&h=300',
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
                    cost={this.state.cost}
                    title={this.state.title} />
            </div>
        );
    }
}

export default Sunglasses;