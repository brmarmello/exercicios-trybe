import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testes da Movie cards library', () => {
  test('Deve aparecer "Carregando..." na tela', () => {
    render(<App />);
    const loadingElement = screen.getByText(/carregando.../i);
    expect(loadingElement).toBeInTheDocument();
  });

  test('Deve aparecer o título "Kingsgslave" na tela', async () => {
    render(<App />);

    await waitForElementToBeRemoved(() =>
      screen.getByText(/carregando.../i),
    )

    const kingsgslaveElement = screen.getByText(/Kingsglaive/);
    expect(kingsgslaveElement).toBeInTheDocument();
  });

  test('Deve aparecer "Rating: 4.5" para nos detalhes de Kingsgslave', async () => {
    // Acessar
    render(<App />);

    await waitForElementToBeRemoved(() =>
      screen.getByText(/carregando.../i),
    )

    const detailsLinks = screen.queryAllByText(/ver detalhes/i);

    // Agir
    userEvent.click(detailsLinks[0]);


    // Aferir

    await waitForElementToBeRemoved(() =>
      screen.getByText(/carregando.../i),
    )

    const kingsgslaveRatingElement = screen.getByText(/Rating: 4.5/i);
    expect(kingsgslaveRatingElement).toBeInTheDocument();
  });
});
