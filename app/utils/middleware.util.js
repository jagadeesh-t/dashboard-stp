import map from 'lodash/map';
import result from 'lodash/result';
import {removeFalsy} from './transformer.util';
// OUTGOING

export const prepareCreateIssue = (date, category,topic,description,ministry) => ({
  'date': date,
  'category': category,
  'topic': topic,
  'ministry': ministry,
  'description':description
});

export const prepareCreateSpRequest = (date, requestType,request,ministry) => ({
  'date': date,
  'requestType': requestType,
  'request': request,
  'ministry': ministry,
});

export const prepareCreateCabinetMeeting = (date, category,topic,description,ministry) => ({
  'date': date,
  'category': category,
  'topic': topic,
  'ministry': ministry,
});


export const prepareUpdateSpecialRequest = (status,request,requestType) =>({
	'status' : status,
	'request' : request,
	'requestType' : requestType
});