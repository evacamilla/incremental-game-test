import React, { Component } from 'react';
import UpdateButton from './UpdateButton.js';
import UpdateDescription from './UpdateDescription';

class Nicole extends Component {
    state = {
        title: 'Nicole',
        description: 'gewewhw',
        imgUrl: 'url(https://images-production.global.ssl.fastly.net/uploads/photos/file/113795/nicole-richie-aug-2003.jpg)',
        cost: 1000,
        type: '',
        effect: 320,
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

export default Nicole;