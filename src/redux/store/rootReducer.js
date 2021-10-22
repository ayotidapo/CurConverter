import { combineReducers } from 'redux';
import converterState from 'redux/reducers/converterReducer';

export const appReducer = combineReducers({ converterState });

const rootReducer = (state, action) => {
  if (action.type === 'SIGN_OUT') {
    // state = undefined;
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};
export default rootReducer;
