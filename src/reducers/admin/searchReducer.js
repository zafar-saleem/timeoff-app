import * as types from '../../actions/';

export default function(state = [], action) {
  const term = action.response;

  switch(action.type) {
    case types.SEARCH_EMPLOYEE_SUCCESS:
      return { ...state, term };
    default:
      return state;
  }
}