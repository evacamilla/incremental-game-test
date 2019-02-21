import React from 'react';

function ErrorBox(props) {
    return (
        <div className="error-message">
            <p>{props.errorMessage}</p>
            <button className="btn" onClick={props.toggleErrorBox}>
                Close me
            </button>
        </div>
    );
}

export default ErrorBox;