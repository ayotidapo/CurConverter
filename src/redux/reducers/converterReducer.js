/* eslint-disable camelcase */

export const LOAD_CONVERTING_STATE = 'LOAD_CONVERTING_STATE';
export const SUCCESS_CONVERTING_STATE = 'SUCCESS_CONVERTING_STATE';
export const FAIL_CONVERTING_STATE = 'FAIL_CONVERTING_STATE';

const initialState = {
  converting: false,
  data: {},
  success: false,
  error: '',
};

const converterState = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_CONVERTING_STATE:
      return {
        ...state,
        converting: true,
        success: false,
        error: '',
      };
    case SUCCESS_CONVERTING_STATE:
      return {
        ...state,
        converting: false,
        data: action.data,
        success: true,
        error: '',
      };
    case FAIL_CONVERTING_STATE:
      return {
        ...state,
        converting: false,
        success: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default converterState;
