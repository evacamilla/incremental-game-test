import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button.js';

class Updates extends Component {
    state = {
        cost: 20,
        increasedPoints: 5
    }

    handleUpdate = (event) => {
        //send cost + increasedPoints to App.js
        //take away that update from view, pull from array or something
        //some animation
        console.log(event.target.name);
    }

    render(){
        return(
            <div>
                <button name='1' value='' onClick={this.handleUpdate}>
                    title, img, description, cost <br />
                    AND if its disabledOrNot (cost less or equal to totalpoints ) make clickable and in color or something <br/>
                    5-10 updates shown....
                </button>
            </div>
        );
    }
}


export default Updates;