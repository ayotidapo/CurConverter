/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import axiosMock from 'axios';
import history from 'helpers/history';
import { renderWithRedux } from 'testHelper';
import { cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import CurrentRatesPage from '../index';

describe('how currentRates Page component works', () => {
  let cProps;
  afterEach(cleanup);
  beforeEach(() => {
    cProps = {
      history: {
        ...history,
        location: {
          ...history.location,
          state: {
            base: 'USD',
          },
        },
      },
    };
    axiosMock.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          base: 'USD',
          results: {
            AED: 3.67299,
            AFN: 89.85526,
            ALL: 104.6767,
          },
        },
      }),
    );
  });
  it('should renders the component without crash and takes snapshot', async () => {
    const { asFragment } = renderWithRedux(<CurrentRatesPage {...cProps} />);
    expect(asFragment).toMatchSnapshot();
    expect(axiosMock.get).toHaveBeenCalledTimes(1);

    expect(axiosMock.get).toHaveBeenCalledWith(
      `/fetch-all?from=USD&api_key=${process.env.REACT_APP_CUR_CONV_KEY}`,
    );
  });

  it('should renders the loader while data changes and show  new content when dome', async () => {
    const { getByTestId } = renderWithRedux(<CurrentRatesPage {...cProps} />);
    const baseSelectInput = getByTestId('rates-base');

    const loader = getByTestId('loader');

    userEvent.selectOptions(baseSelectInput, 'USD');

    expect(loader).toBeVisible();
    expect(axiosMock.get).toHaveBeenCalledTimes(1);

    expect(axiosMock.get).toHaveBeenCalledWith(
      `/fetch-all?from=USD&api_key=${process.env.REACT_APP_CUR_CONV_KEY}`,
    );

    const contentElement = await screen.findByTestId('content-div');
    expect(contentElement).toBeInTheDocument();
  });
});
