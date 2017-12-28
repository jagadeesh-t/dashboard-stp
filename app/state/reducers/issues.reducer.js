import {POPULATE_ISSUES} from '../actions/index.actions';

export default function populateIssues (state = {}, action) {
  switch (action.type) {
  case POPULATE_ISSUES: {
    return action.payload || {};
  }
  default:
    return state;
  }
}
	