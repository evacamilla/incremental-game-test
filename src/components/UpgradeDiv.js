import React from 'react';

function UpgradeDiv(props){
    return(
        <div className='upgrade-div'>
            <div className="upgrade-img-div">
                <img id={props.id} className={props.activeOrNot} src={props.imgUrl} onClick={props.onClick} />
            </div>
            <div className='upgrade-description'>
                <p>€ {props.cost}</p>
                <p>E {props.effect}</p>
            </div>
        </div>
    );
}

export default UpgradeDiv;