import React from 'react';

function PlayerStats(props){
    return(
        <div className={"player-stats " + props.statsToggle}>
            <h2 className="player-name">{props.nameOfPlayer}</h2>
            <p>€€€: {props.totalPoints} fame: {props.fame} per seconds: {props.pointsPerSecond} per click: {props.pointsPerClick} {props.congratulations}</p>
        </div>
    );
}

export default PlayerStats;