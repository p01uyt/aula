import React, { Component } from 'react';
import ClassComponent from './ClassComponent';

class App extends Component {
    render() {
        return (       
            <ClassComponent label='Contador' initialValue={10} />
        );
    }
}

export default App;