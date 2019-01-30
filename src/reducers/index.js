import { combineReducers } from 'redux';
import register from './registerReducer';
import login from './loginReducer';
import admin from './admin/adminReducer';
import list from './admin/listReducer';
import details from './admin/detailsReducer';
import update from './admin/updateReducer';
import count from './admin/countReducer';
import online from './admin/onlineReducer';
import activities from './admin/activityReducer';
import vacations from './admin/vacationsReducer';
import fetchVacations from './admin/fetchVacationsReducer';

const rootReducer = combineReducers({
  register,
  login,
  admin,
  list,
  details,
  update,
  count,
  online,
  activities,
  vacations,
  fetchVacations
});

export default rootReducer;