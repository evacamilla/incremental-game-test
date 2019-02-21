import React from 'react';

function PlayerStats(props){
    return(
        <div className={"player-stats " + props.statsToggle}>
            <h2 className="player-name">{props.nameOfPlayer}</h2>
            <div class="stats-flex">
                <div>
                    €€€: {props.totalPoints} 
                </div>
                <div>
                    fame: {props.fame}
                </div>
                <div>

                </div>
                    per seconds: {props.pointsPerSecond}
                <div>

                </div>
                    per click: {props.pointsPerClick}
                <div>
                    
                </div>

                <div>
                {props.congratulations}
                </div>

            </div>
        </div>
    );
}

export default PlayerStats;