import * as types from '../../actions/';

export default function(state = [], action) {
  switch(action.type) {
    case types.UPDATE_ADMIN_PROFILE_SUCCESS:
      return { ...state, action };
    default:
      return state;
  }
}