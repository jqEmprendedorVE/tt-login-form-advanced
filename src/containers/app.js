import React from 'react'
import mobile from 'is-mobile'
import { Redirect } from 'react-router'

class App extends React.Component {
  render() {
    return !mobile()
      ? <Redirect to="/web" />
      : <Redirect to="/mobile" />
  }
}

export default App