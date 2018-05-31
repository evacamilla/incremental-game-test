import React, { Component } from 'react';
import UpdateButton from './UpdateButton.js';
import UpdateDescription from './UpdateDescription.js';

class Extentions extends Component {
    state = {
        title: 'Extensions',
        description: 'gewewhw',
        imgUrl: 'url(https://i.pinimg.com/originals/f9/0e/00/f90e001e6aeef5d7cecfb0ebe3e76166.jpg)',
        cost: 400,
        type: '',
        effect: 100,
        timesUpdated: 0,
        activated: false
    }

    handleUpdate = (event) => {
        //send cost + increasedPoints to change state in App.js
        this.props.makeAnUpdate(this.state.cost, this.state.effect);

        //change state here.. effect*0.90^timesUpdates
        let newEffect = this.state.effect * 0.95 ^ this.state.timesUpdated;
        this.setState({
            effect: newEffect,
            timesUpdated: this.state.timesUpdated + 1
        });

        //some animation

    }

    render(){
        return(
            <div>
                <br />
                <UpdateButton imgUrl={this.state.imgUrl} onClick={this.handleUpdate} />
                <UpdateDescription 
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