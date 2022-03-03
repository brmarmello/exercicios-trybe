import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import rootReducer from '../../store/reducers';

const renderWithRedux = (component, initialState) => {
  let newStore = store;
  if (initialState) {
    newStore = createStore(rootReducer, initialState);
  }
  return <Provider store={ newStore }>{component}</Provider>;
};

export default renderWithRedux;
