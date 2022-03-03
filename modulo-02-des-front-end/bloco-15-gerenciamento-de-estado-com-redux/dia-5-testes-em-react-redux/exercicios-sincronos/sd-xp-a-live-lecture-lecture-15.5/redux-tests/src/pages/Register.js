import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCustomer as addCustomerAction } from '../store/actions';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
    };

    this.handleClickRegister = this.handleClickRegister.bind(this);
  }

  handleClickRegister() {
    const { name, age, email } = this.state;
    const { addCustomer } = this.props;
    addCustomer({ name, age, email });
    this.setState({
      name: '',
      age: '',
      email: '',
    });
  }

  render() {
    const { name, age, email } = this.state;
    const { userLogin } = this.props;
    if (!userLogin.email) return <div>Login não efetuado!</div>;
    return (
      <div>
        <h3 className="text-center">Cadastro de Clientes</h3>
        <div>
          <input
            type="text"
            placeholder="Nome"
            data-testid="input-register-nome"
            value={name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Idade"
            data-testid="input-register-idade"
            value={age}
            onChange={(e) => this.setState({ age: e.target.value })}
          />
          <input
            type="text"
            placeholder="Email"
            data-testid="input-register-email"
            value={email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>
        <button
          className="register-button grow"
          type="button"
          onClick={this.handleClickRegister}
        >
          Registrar Cliente

        </button>
        <div className="link">
          <Link to="/customers">Ver usuários cadastrados</Link>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  userLogin: state.loginReducer,
});
const mapDispatchToProps = (dispatch) => ({
  addCustomer: (e) => dispatch(addCustomerAction(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
