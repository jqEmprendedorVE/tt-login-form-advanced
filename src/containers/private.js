import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { Button } from 'react-bootstrap'
import { logout } from '../actions/auth'


class Private extends React.Component {
  render() {
    if(!this.props.isLoggedIn)
      return <Redirect to="/login" />

    return (
      <div className="container">
        <h1>Seccion Privada</h1>
        <p>Haz ingresado satisfactoriamente :)</p>
        <Button variant="primary" onClick={this.props.logout}>Salir</Button>
      </div>
    )
  }
}

export default connect(
  state => ({
    isLoggedIn: state.user.isLoggedIn
  }),
  {
    logout
  }
)(Private)