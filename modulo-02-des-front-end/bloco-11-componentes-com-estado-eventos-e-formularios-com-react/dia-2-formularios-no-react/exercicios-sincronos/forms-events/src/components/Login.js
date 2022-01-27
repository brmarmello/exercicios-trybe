import React from 'react';
import Input from './Input';
import InputEmail from './InputEmail';
import InputPassword from './InputPassword';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: 'murillo',
      password: '',
    };
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  }

  render() {
    const { password, email, message } = this.state;
    return (
      <section>
        <h2>Login</h2>
        <form>
          <Input
            name="email"
            value={ email }
            type="email"
            onInputChange={ this.handleChange }
          />
          <Input
            name="password"
            value={ password }
            type="password"
            onInputChange={ this.handleChange }
          />
          <Input
            name="message"
            value={ message }
            type="text"
            onInputChange={ this.handleChange }
          />
          <button type="submit">FAZER LOGIN</button>
        </form>
      </section>
    );
  }
}

export default Login;
