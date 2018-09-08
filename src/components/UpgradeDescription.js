import React from 'react';

function UpgradeDescription(props){
    return(
        <div id={props.id} className='upgrade-description'>
            <p>{props.title}</p>
            <p>{props.description}</p>
            <p>cost: {props.cost}</p>
            <p>effect: {props.effect}</p>
            <p>how many: {props.timesUpgraded}</p>
        </div>
    );
}

export default UpgradeDescription;