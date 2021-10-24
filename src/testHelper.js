/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import reduxstore from 'redux/store';

export const renderWithRedux = (
  ui,
  { store = reduxstore } = {},
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {},
) => {
  return {
    ...render(
      <Provider store={store}>
        <Router history={history}>{ui}</Router>
      </Provider>,
    ),
    history,
    store,
  };
};
