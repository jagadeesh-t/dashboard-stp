import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import Navigator from '../../routes/index.routes';
import category from './category.reducer';
import ministries from './ministry.reducer';
import spRequests from './sprequests.reducer';
import issues from './issues.reducer';
import cabinetMeetings from './cabinetMeeting.reducer';

const nav = (state, action) => (
  Navigator.router.getStateForAction(action, state)
);

const appReducers = combineReducers({
  form: formReducer,
    nav,
    category,
    ministries,
    spRequests,
    issues,
    cabinetMeetings
  // add more reducers here
});

const rootReducer = (state, action) => appReducers(state, action);

export default rootReducer;
