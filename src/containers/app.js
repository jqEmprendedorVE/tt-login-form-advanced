import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

function App(props) {
  return props.isLoggedIn
    ? <Redirect to="/private" />
    : <Redirect to="/login" />;
}

export default connect(
  state => ({
    isLoggedIn: state.user.isLoggedIn
  })
)(App)