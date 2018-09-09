import React from 'react';

function Clicker(props){
    return(
        <div className="clicker">
            <img className="clicker-img" src={props.parisImg} onClick={props.onClick} />
        </div>
    );
}

export default Clicker;