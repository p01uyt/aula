import React, { Component } from 'react';
import Componete from './Componete';

class App extends Component {
    render() {
        return (       
            <div>
                <Componete />     
                <Componete value='Passando propriedades'/>
            </div>
        );
    }
}

export default App;