import React from 'react';

function Header(props){
    return(
        <header className="App-header">
            <h1 className="App-title">Clicker Game</h1>
            <h2>{props.nameOfPlayer}</h2>
            {props.playerStats}
        </header>
    );
}

export default Header;