import * as types from '../../actions/';

export default function(state = [], action) {
  const online = action.response;

  switch(action.type) {
    case types.FETCH_ONLINE_EMPLOYEES_SUCCESS:
      return { ...state, online };
    default:
      return state;
  }
}