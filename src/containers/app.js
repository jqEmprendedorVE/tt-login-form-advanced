import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

function App(props) {
  return props.isLoggedIn ? (
    <Redirect to="/private" />
  ) : (
    <Redirect to="/login" />
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default connect(state => ({
  isLoggedIn: state.user.isLoggedIn
}))(App);
