import React from 'react';

export default props => (
    <div>
        <h1> Família </h1>        
        {React.Children.map(props.children, 
            child => React.cloneElement(child, { ...props }))}
        {/* metodo map é um for, onde ele le o array React.Children e
            depois seta o array props.children, 
            onde child recebe propriedades de um membro do array, 
            para passar propriedade de familia para membro vc usa cloneElement,
            passando para propriedade de membro o clone de propriedades de familia 
            atraves do operador Spread( ...props)
        */}
    </div>
)