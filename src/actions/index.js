import { LOGIN_SUCCESS } from './types';

const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  payload: { user: user.user },
});

export default loginSuccess;
