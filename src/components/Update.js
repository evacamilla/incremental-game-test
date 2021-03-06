import React, { Component } from 'react';
import updateButton from './UpdateButton.js';
import UpdateButton from './UpdateButton.js';

class Update extends Component {
    state = {
        cost: 20,
        increasedPoints: 5
    }

    handleUpdate = (event) => {
        //send cost + increasedPoints to App.js
        //some animation
        console.log(event.target); 
    }

    render(){
        return(
            <div>
                <button name='1' value='' onClick={this.handleUpdate}>
                    title, img, description, cost <br />
                    AND if its disabledOrNot (cost less or equal to totalpoints ) make clickable and in color or something <br/>
                    5-10 updates shown....
                </button>
                <br />
                <UpdateButton onClick={this.handleUpdate} title={cellPhone.title} description={cellPhone.description} img={cellPhone.img}/>
            </div>
        );
    }
}

    const cellPhone = {
        title: 'cellphone',
        description: 'descr',
        img: 'url here',
        cost: 200,
        effectiveness: 2
    }




export default Update;