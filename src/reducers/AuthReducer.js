import { LOGIN_SUCCESS, SIGNUP_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  user: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload };
    case SIGNUP_SUCCESS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
