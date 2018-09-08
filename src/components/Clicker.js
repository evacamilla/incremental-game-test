import React from 'react';

function Clicker(props){
    return(
        <div className="clicker">
            <img src="https://orig00.deviantart.net/5499/f/2013/198/7/7/paris_hilton_png_by_brokenheartdesignz-d6du9ik.png" onClick={props.onClick} />
        </div>
    );
}

export default Clicker;