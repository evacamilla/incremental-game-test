import React, { Component } from 'react';
import UpgradeDiv from '../UpgradeDiv.js';

class Nicole extends Component {
    state = {
        title: 'Nicole',
        description: 'gewewhw',
        imgUrl: 'https://78.media.tumblr.com/fabb4601580ab45ad4dfd2f7a84f12ec/tumblr_inline_mo7qgqmDim1qz4rgp.gif',
        cost: 100,
        auto: false,
        effect: 320,
        timesUpgraded: 0,
        activated: true
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
                <div>{this.props.totalpoints}</div>
            </div>
        );
    }
}

export default Nicole;