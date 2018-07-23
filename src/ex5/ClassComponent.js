import React, { Component } from 'react';

export default class ClassComponent extends Component{
    constructor(props){
        super(props)
        this.state = { value: props.initialValue }
        this.handleChange = this.handleChange.bind(this)
        {/* é necessario colocar a evento no construtor para react enteder que this.handle
            pertence ao ClassComponent */}
    }

    handleChange(event){
        this.setState({ value: event.target.value })
        {/* target pega om valor do input seta o valor no state value */}
    }  

    render(){
        return(
            <div>
                <h1>{this.props.label}</h1>
                <label>{this.state.value}</label><br />
                <input onChange={this.handleChange} value={this.state.value}/>                
            </div>
        )
    }
}