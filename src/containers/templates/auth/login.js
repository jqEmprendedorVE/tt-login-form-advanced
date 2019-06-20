import React, {Component} from 'react';
import { connect } from 'react-redux';
import LoginForm from '../../../components/auth/loginForm';
import { tryLogin } from '../../../actions/auth';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', pass: ''};

    this.handleChange = this.handleChange.bind(this);
    this.tryLogin = this.tryLogin.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.id]: e.target.value})
  }

  tryLogin(e) {
    e.preventDefault();
    this.props.tryLogin({...this.state});
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <LoginForm
              data={this.state}
              handleEmailChange={this.handleChange}
              handlePassChange={this.handleChange}
              submit={this.tryLogin}
            />
          </div>
        </div> 
      </div>
    )
  }
}

export default connect(
  state => ({
    isLoggedIn: state.user.isLoggedIn
  }),
  {
    tryLogin
  }
)(Login);