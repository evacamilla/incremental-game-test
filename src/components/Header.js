import React from 'react';

function Header(props){
    return(
        <header className="App-header">
            <h1 className="App-title">Paris Game</h1>
            <h2>{props.nameOfPlayer}</h2>
            <div className={props.statsToggle}>
                <p>€€€: {props.totalPoints}</p>
                <p>click per seconds: {props.pointsPerSecond}</p>
                <p>per click: {props.pointsPerClick}</p>
            </div>
        </header>
    );
}

export default Header;