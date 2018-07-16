import React, { Component } from 'react'
import './App.css'
import Menubar from './Layout/Menubar/Menubar'
import Dock from './Layout/Dock/Dock'

class App extends Component {
  state = {
    applications: ['finder'],
  }
  render() {
    return (
      <div className="App">
        <Menubar />
        <Dock apps={this.state.applications} />
      </div>
    )
  }
}

export default App
