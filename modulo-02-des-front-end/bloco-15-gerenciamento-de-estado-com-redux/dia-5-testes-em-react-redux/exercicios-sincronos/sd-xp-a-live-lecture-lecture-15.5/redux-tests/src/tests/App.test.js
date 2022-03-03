import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import App from '../App';
import store from '../store';
import renderWithRouter from './helpers/renderWithRouter';
import renderWithRedux from './helpers/renderWithRedux';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';

describe('Cadastro de clientes', () => {
  test('verifica se a tela inicial é renderizada corretamente', () => {
    renderWithRouter(<App />);

    expect(screen.getByText(/cadastro de clientes/i)).toBeInTheDocument();
    expect(screen.getByText(/faça seu login/i)).toBeInTheDocument();
  });

  test('verifica se a tela de login é renderizada corretamente', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/login');
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });

  // test('verifica se a tela de login é renderizada corretamente', () => {
  //   const { history } = renderWithRouter(<Provider store={ store }><App /></Provider>);
  //   history.push('/login');
  //   userEvent.click(screen.getByText(/entrar/i));
  //   console.log(history.location);
  //   expect(screen.getByText(/Login não efetuado!/i)).toBeInTheDocument();
  // });
});
