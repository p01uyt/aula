import React, { Component } from 'react';

class ClickCounter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clickCount: 0
        }  
        console.log(props.emoji + 
            '=== ClickCounter constructor is here!')
    }

    componentWillMount() {
        //antes do componente ser montado/construtor
        console.log(this.props.emoji + 
            '=== ClickCounter will mount. Yay!')
    }

    componentDidMount() {
        //
        console.log(this.props.emoji + 
            '=== ClickCounter did mount. count: ' + this.props.count)
    }

    componentWillReceiveProps(nextProps) {
        console.log(this.props.emoji + 
            '=== ClickCounter will receive props. next props:' + 
            nextProps.count)
    }   

    componentWillUnmount() {
        console.log(this.props.emoji + '=== ClickCounter will unmount :-(')
    }

    getTotal() {
        return this.state.clickCount + this.props.count
    }

    render() {
        return (
            <span className='padded'
                onClick={() => {
                let clickCount = this.state.clickCount + 1
                this.setState({
                    clickCount: clickCount})
                }}
                >
                <button>{this.props.emoji}</button>
                {this.getTotal() < 100 ? this.getTotal() : '99+'}
            </span>
        );
    }
}
export default ClickCounter;