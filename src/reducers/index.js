import { combineReducers } from 'redux';
import register from './registerReducer';
import login from './loginReducer';

import admin from './admin/adminReducer';
import list from './admin/listReducer';
import count from './admin/countReducer';
import online from './admin/onlineReducer';
import activities from './admin/activityReducer';
import deactivate from './admin/deactivateReducer';
import search from './admin/searchReducer';
import profile from './admin/profileReducer';

import vacations from './employee/vacationsReducer';

import fetchVacations from './common/fetchVacationsReducer';
import details from './common/detailsReducer';
import update from './common/updateReducer';

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
  fetchVacations,
  deactivate,
  search,
  profile
});

export default rootReducer;