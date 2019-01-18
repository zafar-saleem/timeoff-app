import { combineReducers } from 'redux';
import register from './registerReducer';
import login from './loginReducer';
import admin from './adminReducer';

const rootReducer = combineReducers({
  register, login, admin
});

export default rootReducer;