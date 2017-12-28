import {POPULATE_SPREQUESTS} from '../actions/index.actions';

export default function populateSpRequests (state = {}, action) {
  switch (action.type) {
  case POPULATE_SPREQUESTS: {
    return action.payload || {};
  }
  default:
    return state;
  }
}
	