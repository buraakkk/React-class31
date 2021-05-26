import React from 'react';

const Button = (props) => {
    return <button type="button" class="btn btn-primary btn-sm" onClick={props.getFriend}>Get a friend!</button>;
}

export default Button;
