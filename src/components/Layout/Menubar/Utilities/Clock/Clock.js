import React, { Component } from 'react'
import Aux from '../../../../../hoc/Aux'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({ date: new Date() })
  }

  render() {
    return <Aux>{this.state.date.toLocaleTimeString()}</Aux>
  }
}

export default Clock
