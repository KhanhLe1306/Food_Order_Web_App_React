import React from 'react';
import classes from './CloseButton.module.css'

function CloseButton(props) {
    return (
        <div>
            <span className={classes.button} onClick={props.onClose}>Close</span>
        </div>
    )
}

export default CloseButton;
