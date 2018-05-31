import React from 'react';

function Header(props){
    return(
        <header className="App-header">
            <h1 className="App-title">Clicker Game</h1>
            <h2>{props.nameOfPlayer}</h2>
            <p>€€€: {props.totalPoints}</p>
            <p>Klocka: {props.pointsPerSecond}</p>
            <p>Pil: {props.pointsPerClick}</p>
        </header>
    );
}

export default Header;