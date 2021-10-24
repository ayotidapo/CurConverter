/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import axiosMock from 'axios';
import { renderWithRedux } from 'testHelper';
import { fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ConverterPage from '../index';

describe('how Converter Page component works', () => {
  afterEach(cleanup);
  beforeEach(() => {
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
  });
  it('renders the component without crash and takes snapshot', async () => {
    const { asFragment } = renderWithRedux(<ConverterPage />);

    expect(asFragment).toMatchSnapshot();
    expect(axiosMock.get).toHaveBeenCalledTimes(0);
  });

  it('renders the component', async () => {
    const { getByTestId, getByRole, store } = renderWithRedux(
      <ConverterPage />,
    );

    let { converterState } = store.getState();

    const amountInput = getByRole('textbox', { name: 'Enter Amount' });
    const baseSelectInput = getByTestId('base-select');
    const quoteSelectInput = getByTestId('quote-select');

    fireEvent.change(amountInput, { target: { value: '500' } });
    fireEvent.change(baseSelectInput, { target: { value: 'USD' } });
    fireEvent.change(quoteSelectInput, { target: { value: 'NGN' } });

    converterState = await store.getState().converterState;
    console.log(converterState);
    expect(converterState.converting).toBe(true);

    expect(axiosMock.get).toHaveBeenCalledWith(
      `/fetch-one?from=USD&to=NGN&api_key=${process.env.REACT_APP_CUR_CONV_KEY}`,
    );
    await waitFor(() => {
      expect(getByText('is equivalent to')).toBeInTheDocument();
    });
    await store.getState().auth;
    expect(converterState.converting).toBe(false);
  });
});
