import axios from 'axios';

import {
  LOAD_ALL_RATES,
  SUCCESS_ALL_RATES,
  FAIL_ALL_RATES,
} from '../reducers/currentPageReducer';

/* eslint-disable import/prefer-default-export */
export function getAllRates(base) {
  return async (dispatch) => {
    try {
      dispatch({ type: LOAD_ALL_RATES });
      const response = await axios.get(
        `/fetch-all?from=${base}&api_key=${process.env.REACT_APP_CUR_CONV_KEY}`,
      );

      const { data } = response;

      dispatch({
        type: SUCCESS_ALL_RATES,
        data,
      });
      return true;
    } catch (e) {
      const errMsg = e?.response?.data?.message || e?.message;
      // eslint-disable-next-line no-alert
      alert(errMsg);
      dispatch({
        type: FAIL_ALL_RATES,
        error: errMsg,
      });
    }
  };
}
