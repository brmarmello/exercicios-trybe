import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CustomerList from '../components/CustomerList';
import { deleteCustomer as deleteCustomerAction } from '../store/actions';

class Customers extends React.Component {
  render() {
    const { customers, userLogin, deleteCustomer } = this.props;
    if (!userLogin.email) return <div>Login não efetuado!</div>;
    if (customers.length < 1) {
      return (
        <div>
          <div className="none-client">Nenhum cliente cadastrado</div>
          <div className="link">
            <Link to="/register">Cadastre agora!</Link>
          </div>
          <div className="link">
            <Link to="/about">Perfil</Link>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="link">
          <Link to="/register">Cadastre outros!</Link>
        </div>
        <div>
          <CustomerList customers={customers} deleteCustomer={deleteCustomer} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  customers: state.registerReducer,
  userLogin: state.loginReducer,
});

const mapDispatchToProps = (dispatch) => ({
  deleteCustomer: (e) => dispatch(deleteCustomerAction(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Customers);
