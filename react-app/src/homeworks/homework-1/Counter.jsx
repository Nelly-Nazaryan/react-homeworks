import React from 'react'
import './Counter.css'

export default class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    onPlusClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    onMinusClick = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div className='counter'>
                <button onClick={this.onPlusClick}>Plus</button>
                <div>
                    {this.state.count}
                </div>
                <button onClick={this.onMinusClick}>Minus</button>
            </div>
        )
    }
}