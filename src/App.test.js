import React from 'react'
import ReactDOM from 'react-dom'
import Lollypop from './components/Lollypop'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Lollypop />, div)
  ReactDOM.unmountComponentAtNode(div)
})
