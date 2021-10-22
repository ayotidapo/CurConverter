import { combineReducers } from 'redux';

export const appReducer = combineReducers({});

const rootReducer = (state, action) => {
  if (action.type === 'SIGN_OUT') {
    // state = undefined;
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};
export default rootReducer;
