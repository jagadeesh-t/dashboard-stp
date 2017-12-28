import {POPULATE_CATEGORY} from '../actions/index.actions';

export default function populateCategory (state = {}, action) {
  switch (action.type) {
  case POPULATE_CATEGORY: {
    return action.payload || {};
  }
  default:
    return state;
  }
}
	