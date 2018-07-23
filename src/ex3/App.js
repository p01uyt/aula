import React, { Component } from 'react';
import Family from './Family';
import Menber from './Menber';

class App extends Component {
    render() {
        return (       
            <Family lastName='Silva' nacionalidade = 'brasileiro'>
                <Menber name='João' idade='22' />
                <Menber name='Maria' idade='20' />
            </Family>
        );
    }
}

export default App;