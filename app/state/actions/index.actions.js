import {createAction} from 'redux-actions';

// ==================
//  ACTION CONSTANTS
// =============

// CLEAN REDUX STATE
export const CLEAN_APP_STATE = 'CLEAN_APP_STATE';
export const POPULATE_CATEGORY = 'POPULATE_CATEGORY';
export const POPULATE_MINISTRY = 'POPULATE_MINISTRY';
export const POPULATE_SPREQUESTS = 'POPULATE_SPREQUESTS';
export const POPULATE_ISSUES ='POPULATE_ISSUES';
export const POPULATE_CABINET_MEETINGS = 'POPULATE_CABINET_MEETINGS';

//
// CLEAN REDUX STATE action creators
export const cleanAppState = createAction(CLEAN_APP_STATE);

export const populateCategory = createAction(POPULATE_CATEGORY);

export const populateMinistry = createAction(POPULATE_MINISTRY);

export const getSpecialRequests = createAction(POPULATE_SPREQUESTS);

export const getIssues = createAction(POPULATE_ISSUES);

export const populateCabinetMeetings = createAction(POPULATE_CABINET_MEETINGS);