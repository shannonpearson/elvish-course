import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

export default combineReducers({
  auth: AuthReducer, // keeps track of user (login; course progress?) info?
  // need one for current lesson
});
