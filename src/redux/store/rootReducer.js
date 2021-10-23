import { combineReducers } from 'redux';
import converterState from 'redux/reducers/converterReducer';
import allRatesState from 'redux/reducers/currentPageReducer';

export const appReducer = combineReducers({ converterState, allRatesState });

const rootReducer = (state, action) => {
  if (action.type === 'SIGN_OUT') {
    // state = undefined;
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};
export default rootReducer;
