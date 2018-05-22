import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';

export default combineReducers({
  login: LoginReducer, // keeps track of user (login; course progress?) info?
  // need one for current lesson
});
