import React from 'react';

function PlayerStats(props){
    return(
        <div className={"player-stats " + props.statsToggle}>
            <h2>{props.nameOfPlayer}</h2>
            <p>€€€: {props.totalPoints}</p>
            <p>fame: {props.fame}</p>
            <p>per seconds: {props.pointsPerSecond}</p>
            <p>per click: {props.pointsPerClick}</p>
            <p>{props.congratulations}</p>
        </div>
    );
}

export default PlayerStats;