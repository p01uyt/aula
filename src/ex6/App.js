import React, {Component} from 'react'
import '../App.css'
import PopularBar from "./components/PopularBar"

class App extends Component {
    constructor() {
        super()
            this.state = {
            showPopularBar: true,
            upCount: 5,
            downCount: 8
        }
    }

    componentDidMount() {
        this.timer = setInterval(this.everyFiveSeconds.bind(this), 100000000000000000000);
    }

    everyFiveSeconds() {
        let state = this.state
        state.upCount += 2
        state.downCount += 1
        this.setState(state)
    }

    render() {
        return (
            <div>
                <h1>React Lifecycle</h1>
                <label>
                    <input
                    type='checkbox'
                    defaultChecked={this.state.showPopularBar}
                    ref='showPopularBar'
                    onChange={() => this.setState({showPopularBar: !this.state.showPopularBar })}
                    />
                    Show Counter
                </label>

                <PopularBar
                    show={this.state.showPopularBar}
                    upCount={this.state.upCount}
                    downCount={this.state.downCount}
                />
            </div>
        )
    }
}

export default App