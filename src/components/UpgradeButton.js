import React from 'react';

function UpgradeButton(props){
    return(
        <button style={{backgroundImage: props.imgUrl}} className={'upgrade-button ' + props.toggle} onClick={props.onClick}>
            <img className="upgrade-image" src={props.value} />
        </button>
    );
}

export default UpgradeButton;