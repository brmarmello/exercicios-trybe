import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login as loginAction } from '../store/actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const { email, password } = this.state;
    const { login } = this.props;
    return (
      <div className="Login">
        <h3 className="text-center">Login</h3>
        <section className="login-inputs">
          <input
            type="text"
            onChange={(e) => this.setState({ email: e.target.value })}
            placeholder="E-mail"
            data-testid="input-email"
          />
          <input
            type="password"
            onChange={(e) => this.setState({ password: e.target.value })}
            placeholder="Senha"
            data-testid="input-password"
          />
        </section>
        <div className="link">
          <Link
            to="/customers"
            onClick={() => login({ email, password })}
            data-testid="btn-login"
          >
            Entrar
          </Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (e) => dispatch(loginAction(e)),
});

export default connect(null, mapDispatchToProps)(Login);
