import {POPULATE_CABINET_MEETINGS} from '../actions/index.actions';

export default function populateCabinetMeetings (state = {}, action) {
  switch (action.type) {
  case POPULATE_CABINET_MEETINGS: {
    return action.payload || {};
  }
  default:
    return state;
  }
}
	