import React from 'react';

function Button(props){
    return(
        <button onClick={props.onClick} style={{backgroundImage: props.backgroundImage}} className={props.className} type={props.type}>{props.value}</button>
    );
}

export default Button;