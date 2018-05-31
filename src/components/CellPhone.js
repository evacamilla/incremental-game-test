import React, { Component } from 'react';
import UpdateButton from './UpdateButton.js';
import Button from './Button.js';

class CellPhone extends Component {
    state = {
        title: 'Cell phone',
        description: 'gewewhw',
        imgUrl: 'url(https://images-na.ssl-images-amazon.com/images/I/41QDbaubnHL._SX425_.jpg)',
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

        //some animation + sound

    }

    render(){
        return(
            <div className='not-active'>
                <br />
                <UpdateButton imgUrl={this.state.imgUrl} onClick={this.handleUpdate} />
                <div>
                    <p>{this.state.title}</p>
                    <p>{this.state.description}</p>
                    <p>{this.state.cost}</p>
                    <p>{this.state.effect}</p>
                </div>
            </div>
        );
    }
}

export default CellPhone;