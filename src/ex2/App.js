import React, { Component } from 'react';
import Default, {Primeiro, Segundo} from './Componete';

class App extends Component {
    render() {
        return (       
            <div>
                <Default />  
                <Primeiro />     
                <Segundo />
            </div>
        );
    }
}

export default App;