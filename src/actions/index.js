import { LOGIN_SUCCESS, SIGNUP_SUCCESS } from './types';

const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  payload: { user },
});

const signupSuccess = user => ({
    type: SIGNUP_SUCCESS,
    payload: { user },
});

// these might return the same 'user' object so if so, probably just have one 'auth success' action that updates state on success for both login and signup

export default loginSuccess;
