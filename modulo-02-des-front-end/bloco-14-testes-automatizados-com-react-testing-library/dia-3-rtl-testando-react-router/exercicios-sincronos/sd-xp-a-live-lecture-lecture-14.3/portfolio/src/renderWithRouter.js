
import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

function renderWithRouter(componentToRender) {
  const history = createMemoryHistory();

  const dataRender = render(
    <Router history={ history }>
      { componentToRender }
    </Router>
  )
  return { ...dataRender, history };
}

export default renderWithRouter;
