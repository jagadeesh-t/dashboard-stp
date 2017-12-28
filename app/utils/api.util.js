import * as Http from './http.util';

export const createCategory = (categoryPayload) =>
Http.post('CREATECATEGORY', categoryPayload, {});

export const createMinistry = (payload) =>
Http.post('CREATEMINISTRY', payload, {});

export const getAllMinistry = () =>Http.get('GETALLMINISTRY');

export const getAllCategories = () =>Http.get('GETALLCATEGORIES');

export const deleteCategory = (queryParams) => Http.del('DELETECATEGORY', queryParams);


export const deleteMinistry = (queryParams) => Http.del('DELETEMINISTRY', queryParams);

export const createNewIssue = (payload) => Http.post('CREATEISSUE', payload, {});

export const createNewSpRequest = (payload) => Http.post('CREATESPREQUEST',payload,{});

export const createCabinetMeetingTopic = (payload) => Http.post('CREATECABINETMEETINGTOPIC',payload,{});

export const getSpecialRequests = (payload) => Http.get('GETSPECIALREQUESTS');

export const updateSpecialRequest = (payload) => Http.put('UPDATESPECIALREQUEST',payload,{})

export const getIssuesByCategory = (queryParams) => Http.get('GETISSUESBYCATEGORY',queryParams);

export const getAllIssues = (payload) => Http.get('GETALLISSUES');

export const updateIssue = (payload) => Http.put('UPDATEISSUE',payload,{});

export const getAllCabinetMeetings = () => Http.get('GETALLCABINETMEETINGS');

export const updateCabinetMeeting = (payload) => Http.put('UPDATECABINETMEETING',payload,{});