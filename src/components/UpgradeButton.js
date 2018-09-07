import React from 'react';

function UpgradeButton(props){
    return(
        <button style={{backgroundImage: props.imgUrl}} className={'upgrade-button ' + props.activeOrNot + " test"} onClick={props.onClick}>
            <img id={props.id} className="upgrade-image" src={props.value} />
        </button>
    );
}

export default UpgradeButton;