import React from 'react';

export default props => (
    <div>
        {props.name} <strong>{props.lastName}</strong>, {props.idade}, {props.nacionalidade}.
    </div>
)