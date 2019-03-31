import React, { Component } from 'react'
import { Router } from '@reach/router'
import Lollypop from './components/Lollypop/'
import Shop from './components/Shop/'

import './App.css'

class App extends Component {
  render() {
    return (
      <main>
        <Router className="main">
          <Shop path="/" />
          <Lollypop path="lollypop" />
        </Router>
      </main>
    )
  }
}

export default App
