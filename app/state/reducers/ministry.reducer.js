import {POPULATE_MINISTRY} from '../actions/index.actions';

export default function populateMinistry (state = {}, action) {
  switch (action.type) {
  case POPULATE_MINISTRY: {
    return action.payload || {};
  }
  default:
    return state;
  }
}
	