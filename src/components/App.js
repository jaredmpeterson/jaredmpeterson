import React, { Component } from 'react'
import './App.css'
import Menubar from './Layout/Menubar/Menubar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menubar />
        <h1>jmpOS</h1>
      </div>
    )
  }
}

export default App
