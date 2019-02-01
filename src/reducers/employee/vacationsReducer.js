import * as types from '../../actions/';

export default function(state = [], action) {
  const response = action.response;

  switch(action.type) {
    case types.SET_VACATIONS_SUCCESS:
      return { ...state, response };
    case types.DELETE_VACATION_SUCCESS:
      return { ...state, response };
    default:
      return state;
  }
}