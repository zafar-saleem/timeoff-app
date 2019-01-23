import * as types from '../../actions';

export default function(state = [], action) {
  let activities;

  if (action.response !== undefined) {
    activities = action.response;
  }

  switch(action.type) {
    case types.FETCH_ACTIVITIES_SUCCESS:
      return { ...state, activities };
    default:
      return state;
  }
}