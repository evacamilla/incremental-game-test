import React from 'react';

function UpgradeDiv(props){
    return(
        <div className={'upgrade-div ' + props.activeOrNot}>
            <img id={props.id} className="upgrade-img" src={props.imgUrl} onClick={props.onClick} />
        </div>
    );
}

export default UpgradeDiv;