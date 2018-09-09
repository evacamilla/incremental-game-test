import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button.js';

class PlayerForm extends Component {
    state = {
        nameOfPlayer: null,
        parisImg: null,
        nameIsSet: false
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    setImg = (event) => {
        this.setState({parisImg: event.target.src});
    }
    handleSubmit = (event) => {
        //prevent form from submitting(reloading page and old values of state)
        event.preventDefault();
        if(this.state.parisImg != null){
            //handleName is function in App.js, changing values in that state passing our argument
            this.props.handlePlayerForm(this.state.nameOfPlayer, this.state.parisImg);
        } else {
            console.log('you have to choose an img');
        }
    }

    render(){
        return(
            <div className="name-form">
                <form onSubmit={this.handleSubmit}>
                    {this.state.nameIsSet ?
                        <div>
                            <h3>Choose outfit</h3>
                            <div onClick={this.setImg} className="paris-images">
                                <img src="https://png2.kisspng.com/20180525/xzp/kisspng-paris-hilton-baseball-cap-headgear-glasses-5b0879c9ef4a33.7379160915272821219801.png" />
                                <img src="https://orig00.deviantart.net/5499/f/2013/198/7/7/paris_hilton_png_by_brokenheartdesignz-d6du9ik.png" />
                            </div>
                            <Button value='Set player' type="submit"/>
                        </div>
                        : 
                        <div>
                            <h3>Type in your name</h3>
                            <input name="nameOfPlayer" onChange={this.handleChange} type="text"/>
                            <div onClick={() => this.setState({nameIsSet: true})}>Set name</div> 
                        </div>
                    }
                </form>
            </div>
        );
    }
}

PlayerForm.propTypes = {
    handlePlayerForm: PropTypes.func.isRequired
}

export default PlayerForm;