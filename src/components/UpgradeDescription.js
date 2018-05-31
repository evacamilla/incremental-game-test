import React from 'react';

function UpgradeDescription(props){
    return(
        <div className={'upgrade-description'}>
            <p>{props.title}</p>
            <p>{props.description}</p>
            <p>{props.cost}</p>
            <p>{props.effect}</p>
            <p>{props.timesUpgraded}</p>
        </div>
    );
}

export default UpgradeDescription;