import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import LoginForm from '../../../components/auth/loginForm';
import { tryLogin, loginInit } from '../../../actions/auth';

/**
 * Clase container para renderizado de auth y en este caso
 * ejemplo de login
 * @class Login
 * @extends {Component}
 */
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', pass: '' };
  }

  componentWillMount() {
    this.props.loginInit();
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  tryLogin = e => {
    e.preventDefault();
    this.props.tryLogin({ ...this.state });
  };

  render() {
    if (this.props.isLoggedIn) return <Redirect to="/private" />;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <LoginForm
              data={this.state}
              handleEmailChange={this.handleChange}
              handlePassChange={this.handleChange}
              submit={this.tryLogin}
              loginFailed={this.props.loginFailed}
            />
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  loginFailed: PropTypes.bool.isRequired
};

export default connect(
  state => ({
    isLoggedIn: state.user.isLoggedIn,
    loginFailed: state.user.loginFailed
  }),
  {
    tryLogin,
    loginInit
  }
)(Login);
