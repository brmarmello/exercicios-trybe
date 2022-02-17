import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import renderWithRouter from './renderWithRouter';

describe('Testando o portifólio', () => {

  test('Verifica se o texto "Minha página" aparece na tela', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    const titleMyPage = screen.getByRole('heading', { level: 1, name: /minha página/i })

    expect(titleMyPage).toBeInTheDocument();
  });

  test('Verifica se o link sobre mim aparece na tela e se ao clicar o texto é carregado', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    const titleMyPage = screen.getByRole('heading', { level: 1, name: /minha página/i })

    expect(titleMyPage).toBeInTheDocument();

    const linkAbout = screen.getByRole('link', { name: /sobre/i });

    expect(linkAbout).toBeInTheDocument();

    userEvent.click(linkAbout);

    const titleAbout = screen.getByRole('heading', { level: 1, name: /sobre mim/i })

    expect(titleAbout).toBeInTheDocument();

  })

  test('Verifica se o link comentários aparece na tela e se é possível adicionar um comentário na lista', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    const titleMyPage = screen.getByRole('heading', { level: 1, name: /minha página/i })

    expect(titleMyPage).toBeInTheDocument();

    const linkComments = screen.getByRole('link', { name: /comentários/i });

    expect(linkComments).toBeInTheDocument();

    userEvent.click(linkComments);

    const inputComment = screen.getByRole('textbox');

    userEvent.type(inputComment, 'xablau');

    expect(inputComment).toHaveValue('xablau');

    const addCommentButton = screen.getByRole('button', { name: /adicionar/i });

    expect(addCommentButton).toBeInTheDocument();

    userEvent.click(addCommentButton);

    const xablauItem = screen.getByText('xablau');

    expect(xablauItem).toBeInTheDocument();
    expect(inputComment).toHaveValue('');

  })

  test('Verificar se ao acessar uma rota inexistente, aparece a mensagem "Nada encontrado."', () => {

    const { history } = renderWithRouter(<App />)

    history.push('/rota-inexistente');

    const titleNotFound = screen.getByRole('heading', { level: 1, name: /nada encontrado./i });

    expect(titleNotFound).toBeInTheDocument();
  });

});
