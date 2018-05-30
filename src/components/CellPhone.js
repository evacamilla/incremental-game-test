import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UpdateButton from './UpdateButton.js';

class CellPhone extends Component {
    state = {
        title: 'Cell phone',
        description: 'gewewhw',
        img: 'urlwew',
        cost: 500,
        type: '',
        effect: 150,
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
                <UpdateButton onClick={this.handleUpdate} title={this.state.title} description={this.state.description} img={this.state.img} effect={this.state.effect}/>
            </div>
        );
    }
}

export default CellPhone;