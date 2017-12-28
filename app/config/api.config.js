import env from './env.config';
export const SERVER_URL = env.URL;

export const endpoints = {
  CREATECATEGORY: '/createCategory',
  GETALLCATEGORIES: '/getCategory',
  DELETECATEGORY: '/deleteCategory',
  CREATEMINISTRY: '/createMinistry',
  GETALLMINISTRY: '/getAllMinistry',
  DELETEMINISTRY: '/deleteMinistry',
  CREATEISSUE: '/createIssue',
  CREATESPREQUEST : '/createRequest',
  CREATECABINETMEETINGTOPIC : '/createCabinetMeetingTopic',
  GETSPECIALREQUESTS : '/specialRequests',
  UPDATESPECIALREQUEST : '/updateSpecialRequest',
  GETISSUESBYCATEGORY : '/issueByCategory',
  GETALLISSUES : '/getIssues',
  UPDATEISSUE : '/updateIssue',
  GETALLCABINETMEETINGS : '/cabinetMeetings',
  UPDATECABINETMEETING : '/cabinetMeeting'
};

