import axios from 'axios';

import {
  LOAD_CONVERTING_STATE,
  SUCCESS_CONVERTING_STATE,
  FAIL_CONVERTING_STATE,
} from '../reducers/converterReducer';

/* eslint-disable import/prefer-default-export */
export function convertCurrency(base, quote) {
  return async (dispatch) => {
    try {
      dispatch({ type: LOAD_CONVERTING_STATE });
      const response = await axios.get(
        `/fetch-one?from=${base}&to=${quote}&api_key=${process.env.REACT_APP_CUR_CONV_KEY}`,
      );

      const { data } = response;

      dispatch({
        type: SUCCESS_CONVERTING_STATE,
        data,
      });
      return true;
    } catch (e) {
      const errMsg = e?.response?.data?.message || e?.message;
      // eslint-disable-next-line no-alert
      alert(errMsg);
      dispatch({
        type: FAIL_CONVERTING_STATE,
        error: errMsg,
      });
    }
  };
}
