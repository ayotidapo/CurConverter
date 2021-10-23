/* eslint-disable camelcase */

export const LOAD_ALL_RATES = 'LOAD_ALL_RATES';
export const SUCCESS_ALL_RATES = 'SUCCESS_ALL_RATES';
export const FAIL_ALL_RATES = 'FAIL_ALL_RATES';

const initialState = {
  loading: false,
  data: [],
  success: false,
  error: '',
};

const allRatesState = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_ALL_RATES:
      return {
        ...state,
        loading: true,
        success: false,
        error: '',
      };
    case SUCCESS_ALL_RATES:
      return {
        ...state,
        loading: false,
        data: [...mapRatesFunc(state, action)],
        success: true,
        error: '',
      };
    case FAIL_ALL_RATES:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default allRatesState;

const mapRatesFunc = (_state, action) => {
  const results = action.data?.results;
  const mapResult = Object.keys(results).map((currency) => ({
    currency,
    rate: 1 / results[currency],
  }));
  return mapResult;
};
