import React, { Component } from 'react';
import ClassComponent from './ClassComponent';

class App extends Component {
    render() {
        return (       
            <ClassComponent label='Field' initialValue='Teste' />
        );
    }
}

export default App;