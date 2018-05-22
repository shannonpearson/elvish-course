import { LOGIN_ATTEMPT } from './types';

const loginAttempted = (email, password) => ({
  type: LOGIN_ATTEMPT,
  payload: { email, password },
});

export default loginAttempted;
