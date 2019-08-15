import React, { Component } from 'react'
import open from '../../static/images/open.png'
import closed from '../../static/images/closed.png'

import './Shop.css'

class Shop extends Component {
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
    return time < 14 && time > 9
  }

  render() {
    const className = this.state.active ? 'open-sign clicked' : 'open-sign'
    return (
      <img
        src={this.isShopOpen() ? open : closed}
        className={className}
        alt="logo"
        onClick={this.handleClick}
      />
    )
  }
}

export default Shop
