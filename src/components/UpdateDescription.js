import React from 'react';

function UpdateDescription(props){
    return(
        <div>
            <p>{props.title}</p>
            <p>{props.description}</p>
            <p>{props.cost}</p>
            <p>{props.effect}</p>
        </div>
    );
}

export default UpdateDescription;