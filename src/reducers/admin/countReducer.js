import * as types from '../../actions/';

export default function(state = [], action) {
  let total;

  if (action.response) {
    total = action.response.total;
  }

  switch(action.type) {
    case types.FETCH_TOTAL_EMPLOYEES_SUCCESS:
      return { ...state, total }
    default:
      return state;
  }
}