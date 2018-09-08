import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button.js';

class NameForm extends Component {
    state = {
        value: ''
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        //prevent form from submitting(reloading page and old values of state)
        event.preventDefault();
        //handleName is function in App.js, changing values in that state passing our argument
        this.props.handleNameForm(this.state.value);
    }

    render(){
        return(
            <div className="name-form">
                Type in your name
                <form onSubmit={this.handleSubmit}>
                    <input name="value" value={this.state.name} onChange={this.handleChange} type="text"/>
                    <Button value='Set name' type="submit"/>
                </form>
            </div>
        );
    }
}

NameForm.propTypes = {
    handleNameForm: PropTypes.func.isRequired
}

export default NameForm;