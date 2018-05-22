const INITIAL_STATE = {
  email: '',
  password: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_ATTEMPT:
      return { ...state, ...action.payload },
    default:
      return state;
  }
};
