import React from 'react';

function UpdateButton(props){
    return(
        <button style={{backgroundImage: props.imgUrl}} className="update-button" onClick={props.onClick}>
            <img className="update-image" src={props.value} />
        </button>
    );
}

export default UpdateButton;