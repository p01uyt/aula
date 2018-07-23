import React from 'react';

/* export default function () {
    return <h1>Primeiro componente</h1>
}*/

/* Em Arrow function */
/*export default () => (
     <h1>Primeiro componente</h1>
);*/

/* Passando propriedades */
export default props => (
     <h1>{props.value}</h1>
);