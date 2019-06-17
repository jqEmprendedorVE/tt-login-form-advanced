import React from 'react'
import mobile from 'is-mobile'
import { Redirect } from 'react-router'

class Mobile extends React.Component {
  render() {
    if(!mobile()) {
      return <Redirect to="/web" />
    }

    return (
      <div>
        <h1>Mobile</h1>
      </div>
    )
  }
}
export default Mobile