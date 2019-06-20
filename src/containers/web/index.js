import React from 'react'
import mobile from 'is-mobile'
import { Redirect } from 'react-router'

class Web extends React.Component {
  render() {
    if(mobile()) {
      return <Redirect to="/mobile" />
    }

    return (
      <div>
        <h1>Web</h1>
      </div>
    )
  }
}
export default Web