import React, { Component } from 'react';

export default class ClassComponent extends Component{
    constructor(props){
        super(props)
        this.state = { value: props.initialValue }
    }

    contador(numero){
        this.setState({ value: this.state.value + numero })
    }

    render(){
        return(
            <div>
                <h1>{this.props.label}</h1>
                <h2>{this.state.value}</h2>
                <button onClick={() => this.contador(-1)}>Dec</button>
                <button onClick={() => this.contador(1)}>Inc</button>
            </div>
        )
    }
}