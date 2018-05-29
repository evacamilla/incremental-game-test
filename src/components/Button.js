import React from 'react';

function Button(props){
    return(
        <button onClick={props.onClick} type={props.type}>{props.value}</button>
    );
}

export default Button;