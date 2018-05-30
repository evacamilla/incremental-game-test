import React from 'react';

function UpdateButton(props){
    return(
        <button onClick={props.onClick}>
            {props.title}<br />
            {props.description} <br />
            {props.img}</button>
    );
}

export default UpdateButton;