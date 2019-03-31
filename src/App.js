import React, { Component } from 'react'
import open from './open.png'
import './App.css'

class App extends Component {
  state = {
    active: false,
  }

  handleClick = () => {
    if (this.state.active) return
    this.setState({active: true})
    window.setTimeout(() => {
      this.setState({active: false})
    }, 2000)
  }

  render () {
    const className = this.state.active ? 'open-sign clicked' : 'open-sign'
    return (
      <main className="main">
        <img
          src={open}
          className={className}
          alt="logo open"
          onClick={this.handleClick}
        />
      </main>
    )
  }
}

export default App
