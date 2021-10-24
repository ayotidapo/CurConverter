/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import axiosMock from 'axios';
import { renderWithRedux } from 'testHelper';
import { cleanup, screen } from '@testing-library/react';

import ConverterPage from '../index';

describe('how Converter Page component works', () => {
  afterEach(cleanup);

  it('renders the component without crash and takes snapshot', async () => {
    const { asFragment } = renderWithRedux(<ConverterPage />);

    expect(asFragment).toMatchSnapshot();
  });

  it('makes an instant API call whenever input value changes', async () => {
    jest.useFakeTimers();

    axiosMock.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          base: 'USD',
          result: {
            NGN: 414,
          },
          updated: '2021-10-24 02:22:15',
          ms: 3,
        },
      }),
    );

    const { getByTestId, getByRole, store } = renderWithRedux(
      <ConverterPage />,
    );

    const amountInput = getByRole('textbox', { name: 'Enter Amount' });
    const baseSelectInput = getByTestId('base-select');
    const quoteSelectInput = getByTestId('quote-select');

    userEvent.type(amountInput, '500');
    userEvent.selectOptions(baseSelectInput, 'USD');
    userEvent.selectOptions(quoteSelectInput, 'NGN');

    jest.runAllTimers();

    expect(axiosMock.get).toHaveBeenCalledWith(
      `/fetch-one?from=USD&to=NGN&api_key=${process.env.REACT_APP_CUR_CONV_KEY}`,
    );

    expect(axiosMock.get).toHaveBeenCalledTimes(1);

    await screen.findByText('is equivalent to');
    expect(screen.getByText('is equivalent to')).toBeInTheDocument();

    await store.getState().auth;
  });
});
