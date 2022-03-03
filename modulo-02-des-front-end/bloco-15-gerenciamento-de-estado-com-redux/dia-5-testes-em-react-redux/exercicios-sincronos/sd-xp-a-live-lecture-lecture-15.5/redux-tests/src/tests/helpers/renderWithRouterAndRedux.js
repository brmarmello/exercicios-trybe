import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducers from '../../store/reducers';
// import store from '../../store';

const renderWithRouterAndRedux = (
  component, // componente a ser renderizado
  {
    // estado inicial para o nosso reducer
    initialState = {},

    // caso você passe uma store por parâmetro ela será utilizada
    // caso contrário vai chamar a função createStore e criar uma nova
    store = createStore(rootReducers, initialState),

    // rota inicial da nossa aplicação
    initialEntries = ['/'],

    // caso você passe um history por parâmetro ele será utilizado
    // caso contrário vai chamar a função createMemotryHistory e criar um novo
    history = createMemoryHistory({ initialEntries }),
  } = {},
) => {
  if (!component) { throw new Error('Não pode sem component!'); }

  // let newStore = store;
  // if (initialState) {
  //   newStore = createStore(rootReducers, initialState)
  // }

  // if( !store ){
  //   store = createStore(rootReducers, initialState);
  // }

  return { // arrow function que retorna um objeto
    // spread do retorno do render { getByTestId, getByRole, etc }
    ...render(
      <Router history={ history }>
        <Provider store={ newStore }>
          {component}
        </Provider>
      </Router>,
    ),

    // history usado acima
    history,

    // store usada acima
    store,
  };
};

// resultado dessa função:
// renderiza o componente no teste
// retorna um objeto contendo { store, history, getByTestId, getByRole, etc }

export default renderWithRouterAndRedux;
