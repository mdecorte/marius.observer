import React, { Component } from 'react'
import open from './open.png'
import closed from './closed.png'
import './App.css'

class App extends Component {
  state = {
    active: false,
  }

  handleClick = () => {
    if (this.state.active) return
    this.setState({ active: true })
    window.setTimeout(() => {
      this.setState({ active: false })
    }, 2000)
  }

  isShopOpen = () => {
    const time = new Date().getHours()
    return time < 17
  }

  render() {
    const className = this.state.active ? 'open-sign clicked' : 'open-sign'
    return (
      <main className="main">
        <img
          src={this.isShopOpen() ? open : closed}
          className={className}
          alt="logo"
          onClick={this.handleClick}
        />
      </main>
    )
  }
}

export default App
