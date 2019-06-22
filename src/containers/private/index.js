import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { Button } from 'react-bootstrap'
import { logout } from '../../actions/auth'


function Private(props) {
  if(!props.isLoggedIn)
    return <Redirect to="/login" />

  return (
    <main>
      <div className="container private">
        <h1>Seccion Privada</h1>
        <p>Haz ingresado satisfactoriamente :)</p>
        <Button variant="primary" onClick={props.logout}>Salir</Button>
      </div>
    </main>
  );
}

export default connect(
  state => ({
    isLoggedIn: state.user.isLoggedIn
  }),
  {
    logout
  }
)(Private)