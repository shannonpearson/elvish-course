import { LOGIN_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  user: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, ...action.payload }; // user: action.payload.user
    default:
      return state;
  }
};
