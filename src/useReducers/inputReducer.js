const inputReducer = (state, action) => {
  switch (action.type) {
    case 'ON_INPUT_CHANGE':
      return { ...inputChangeFunc(state, action) };
    case 'ON_UPDATE_INPUT':
      return { ...action.validatedInputs };
    case 'UPDATE_A_FIELD':
      return { ...updateAfieldFunc(state, action) };
    default:
      return state;
  }
};

export default inputReducer;

const inputChangeFunc = (state, action) => {
  const { name, value, extraError } = action;
  const State = { ...state };
  State[name].value = value;
  State[name].error = extraError;
  if (value?.trim()) State[name].filled = true;
  else State[name].filled = false;

  return State;
};

const updateAfieldFunc = (state, action) => {
  const { name } = action;
  const State = { ...state };
  State[name] = {
    ...State[name],
    ...action.update,
  };

  return State;
};
