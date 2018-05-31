import React from 'react';

function UpgradeDescription(props){
    return(
        <div>
            <p>{props.title}</p>
            <p>{props.description}</p>
            <p>{props.cost}</p>
            <p>{props.effect}</p>
        </div>
    );
}

export default UpgradeDescription;