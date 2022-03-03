import React from 'react';

function User({ customer, deleteCustomer, index }) {
  return (
    <div>
      <p data-testid="client-name">
        Nome:
        {' '}
        {customer.name}
      </p>
      <p data-testid="client-age">
        Idade:
        {' '}
        {customer.age}
      </p>
      <p data-testid="client-email">
        Email:
        {' '}
        {customer.email}
      </p>
      <button
        type="button"
        className="delete grow"
        data-testid={ `button-remove-${index + 1}` }
        onClick={ () => deleteCustomer(customer) }
      >
        Excluir
      </button>
    </div>
  );
}

export default User;
