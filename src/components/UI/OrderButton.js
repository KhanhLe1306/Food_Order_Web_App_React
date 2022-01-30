import React from 'react';
import classes from './OrderButton.module.css'

function OrderButton(props) {
    return <div>
        <span className={classes.button} onClick={props.onClick}>Order</span>
    </div>
}

export default OrderButton;
