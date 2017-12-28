import {NavigationActions} from 'react-navigation';
import {Toast} from '../../utils/RNHelpers.util';
import * as middleware from '../../utils/middleware.util';
import * as api from '../../utils/api.util';
import * as actions from '../actions/index.actions';
import {getErrorMessage} from '../../utils/transformer.util';
import result from 'lodash/result';
import {AlertIOS,DeviceEventEmitter} from 'react-native';


export const login = (username, password) => (dispatch, getState) => {
 // const payload = middleware.prepareLogin(username, password);
  // return api.login(payload).then((res) => {
  //   dispatch(actions.populateUser(result(res, 'data.user', {})));
  //   dispatch(NavigationActions.reset({
  //     index: 0,
  //     actions: [NavigationActions.navigate({routeName: 'Home'})]
  //   }));
  //   const currentUser = result(getState(), 'user', {});
  //   api.getTransactions().
  // then((res) => {
  //   const transactionList = middleware.transformTransactionHistory(res.data, currentUser);
  //   dispatch(actions.updateTransactions(transactionList));
  // });
  // }).catch((err) => {
  //   Toast.show(getErrorMessage(err));
  // });
  console.log("logging state in thunks");
  console.log(getState());

};

export const logout = () => (dispatch) => {
  api.logout().then(() => {
    Toast.show('Logged out successfuly !');
  }).catch((err) => {
    Toast.show(getErrorMessage(err));
  });
  return dispatch(NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({routeName: 'Login'})]
  }));
};

export const getAllCategories = () => (dispatch) => {
   return api.getAllCategories().then((categories) => {
      dispatch(actions.populateCategory(categories));
    }).catch((err)=>{
      Toast.show(getErrorMessage(err));
    });
}

export const deleteCategory = (name) => (dispatch) => {
     return api.deleteCategory({name:name}).then(() => {
      dispatch(getAllCategories()).then(()=>{
      })
    }).catch((err)=>{
      Toast.show(getErrorMessage(err));
    });
    }

export const createNewCategory = (name) => (dispatch) => {

  return api.createCategory({name}).then((res) => {
    AlertIOS.alert("successfuly Created A New Category");
    dispatch(getAllCategories()).then(()=>{
      dispatch(NavigationActions.navigate({routeName: 'ManageCategory'}));
    })
    
  }).catch((err) => {
    Toast.show(getErrorMessage(err));
  });
};

export const getAllMinistry = () => (dispatch) => {
   return api.getAllMinistry().then((ministies) => {
      dispatch(actions.populateMinistry(ministies));
    }).catch((err)=>{
      Toast.show(getErrorMessage(err));
    });
}


export const createNewMinistry = (ministryName) => (dispatch) => {

  return api.createMinistry({ministryName}).then((res) => {
    AlertIOS.alert("successfuly Created A New Ministry");
    dispatch(getAllMinistry()).then(()=>{
      dispatch(NavigationActions.navigate({routeName: 'ManageMinistry'}));
    })
    
  }).catch((err) => {
    Toast.show(getErrorMessage(err));
  });
};


export const deleteMinistry = (ministryName) => (dispatch) => {
     return api.deleteMinistry({ministryName:ministryName}).then(() => {
      dispatch(getAllMinistry()).then(()=>{
      })
    }).catch((err)=>{
      Toast.show(getErrorMessage(err));
    });
    }

export const register = (phone, password, name, email, countryCode) => (dispatch) => {
  const payload = middleware.prepareRegister(phone, password, name, email, countryCode);
  return api.register(payload).then((res) => {
    dispatch(actions.populateUser(result(res, 'data', {})));
    dispatch(NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'Home'})]
    }));
  }).catch((err) => {
    Toast.show(getErrorMessage(err));
  });
};

export const getUser = () => (dispatch) => {
  const defaultUserData = {};
  return api.user().
  then((res) => dispatch(actions.populateUser(result(res, 'data', defaultUserData)))).
  catch((err) => {
    Toast.show(getErrorMessage(err));
    return Promise.resolve();
  });
};


export const createNewIssue = (date,topic,description) => (dispatch, getState) => {
  const category = result(getState(),'form.category.values.category', null);
  const ministry = result(getState(),'form.ministry.values.ministry',null);
  const date = result(getState(),'form.date.values.date',new Date());
  console.log("logging ministry value veore")
  console.log(ministry)
  try{
  if(ministry===null){
    AlertIOS.alert("Please Select the Ministry");
    throw "Error Please Select Ministry"
  }

  if(category===null){
    AlertIOS.alert("Please Specify the Category");
    throw "Error Please Select Category"
  }
  const payload = middleware.prepareCreateIssue(date,category,topic,description,ministry);
  return api.createNewIssue(payload).then(() => {
    dispatch(NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'Home'})]
    }));
     AlertIOS.alert("successfuly Created A New Issue Item");
  }).catch((err) => {
    Toast.show(getErrorMessage(err));
    Toast.show('Error Processing the Request');
  });
}catch(err){
   Toast.show(getErrorMessage(err));
}
};

export const createNewCabinetMeetingTopic = (topic,description) => (dispatch, getState) => {
  const category = result(getState(),'form.CreateCabinetMeetingPage.values.category', null);
  const ministry = result(getState(),'form.CreateCabinetMeetingPage.values.ministry',null);
  const date = result(getState(),'form.CreateCabinetMeetingPage.values.date',new Date());
  if(ministry===null || ministry===undefined){
    AlertIOS.alert("Please Select the Ministry");
  }

  if(category===null || category===undefined){
    AlertIOS.alert("Please Specify the Category");
  }
  const payload = middleware.prepareCreateCabinetMeeting(date,category,topic,description,ministry);
  return api.createCabinetMeetingTopic(payload).then(() => {
    dispatch(NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'Home'})]
    }));
     AlertIOS.alert("successfuly Created A New Cabinet Meeting Topic");
  }).catch((err) => {
    Toast.show(getErrorMessage(err));
    Toast.show('Error Processing the Request');
  });
};

export const getAllCabinetMeetings = () => (dispatch) => {
   return api.getAllCabinetMeetings().then((res) => {
      
      dispatch(actions.populateCabinetMeetings(res));
    }).catch((err)=>{
      Toast.show(getErrorMessage(err));
    });
}

export const createNewSpecialRequest = (request) => (dispatch, getState) => {
  const ministry = result(getState(),'form.ministry.values.ministry', null);
  const requestType = result(getState(),'form.requestType.values.requestType', null);
  const date = result(getState(),'form.date.values.date',new Date());
  
  if(ministry===null || ministry===undefined){
    AlertIOS.alert("Please Specify the Category");
  }

  if(requestType===null || requestType===undefined){
    AlertIOS.alert("Please Specify the Request Type")
  } 

  const payload = middleware.prepareCreateSpRequest(date, requestType,request,ministry);
  console.log(payload)
  return api.createNewSpRequest(payload).then(() => {
    dispatch(NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'Home'})]
    }));
     AlertIOS.alert("successfuly Created A New Special Request");
  }).catch((err) => {
    Toast.show(getErrorMessage(err));
    Toast.show('Error Processing the Request');
  });
};


export const getSpecialRequests = () => (dispatch) => {
   return api.getSpecialRequests().then((spRequests) => {
      dispatch(actions.getSpecialRequests(spRequests));
    }).catch((err)=>{
      Toast.show(getErrorMessage(err));
    });
}


export const updateSpecialRequest = (request) => (dispatch,getState) => {
  const status = result(getState(),'form.status.values.status','');
  if(status===null || status === '' || status ===undefined){
    AlertIOS.alert("Please Select the status")
    throw {message: 'Please Select Status'};
  }
  const payload = middleware.prepareUpdateSpecialRequest(status,request);
  AlertIOS.alert("Successfuly Updated the Status")
  return api.updateSpecialRequest(payload).then((res) => {
    dispatch(NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'Home'})]
    }));
  }).catch((err) => {
    Toast.show(getErrorMessage(err));
  });
};

export const updateIssue = (updateBody) => (dispatch,getState) => {
 
  return api.updateIssue(updateBody).then((res) => {
      console.log("logging response");
      console.log(res.data[0].comments);
      if(res.data[0].comments!==undefined){
       DeviceEventEmitter.emit('AddComment',  {"comments":res.data[0].comments})
       dispatch(NavigationActions.back({routeName:'UpdateIssue',updatedComment:updateBody.comment}));
      }
      AlertIOS.alert("Successfully Updated the Status");
      dispatch(NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'Home'})]
      }));
    

  }).catch((err) => {
    Toast.show(getErrorMessage(err));
  });
};

export const updateCabinetMeeting = (updateBody) => (dispatch,getState) => {
 
  return api.updateCabinetMeeting(updateBody).then((res) => {
      console.log("logging response");
      if(res.data[0].comments!==undefined){
      console.log(res.data[0].comments);
      DeviceEventEmitter.emit('AddCommentCabinetMeeting',  {"comments":res.data[0].comments})
      dispatch(NavigationActions.back({routeName:'MyCabinetApprovalsScreen',updatedComment:updateBody.comment}));
      }
      AlertIOS.alert("Successfully Updated the Status");
      dispatch(NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'Home'})]
      }));
    

  }).catch((err) => {
    Toast.show(getErrorMessage(err));
  });
};
export const getAllIssues = () => (dispatch, getState) => {

  return api.getAllIssues().
  then((res) => {
     dispatch(actions.getIssues(res));
  }).
  catch((err) => {
    Toast.show(getErrorMessage(err));
    return Promise.resolve();
  });
};

// export const getIssuesByCategory = (category) => (dispatch, getState) => {

//   return api.getIssuesByCategory().
//   then((res) => {
//      dispatch(actions.getIssues(res));
//   }).
//   catch((err) => {
//     Toast.show(getErrorMessage(err));
//     return Promise.resolve();
//   });
// };

export const getTransactions = () => (dispatch, getState) => {
  const currentUser = result(getState(), 'user', {});
  return api.getTransactions().
  then((res) => {
    const transactionList = middleware.transformTransactionHistory(res.data, currentUser);
    dispatch(actions.getIssues(transactionList));
  }).
  catch((err) => {
    Toast.show(getErrorMessage(err));
    return Promise.resolve();
  }); 
};

export const sendVerificationMessage = (phone, countryCode) => (dispatch) => {
  const payload =  middleware.prepareVerificationRequest(phone, countryCode);
  return api.sendVerificationMessage(payload).then(() => {
   
    dispatch(NavigationActions.navigate({routeName: 'Verification'}));
  }).catch((err) => {
    Toast.show(getErrorMessage(err));
    Toast.show('Error Processing the Request');
  });

};

export const verifyAndRegister = (code) => (dispatch, getState) => {
  const regDetails = result(getState(), 'registrationDetails', {});
  const phone = regDetails.mobileNo;

  
  const countryCode = regDetails.country;
  const payload =  middleware.prepareVerification(phone, countryCode, code);
  
  return api.verifyPhone(payload).then(() => {
    const registerPayload = middleware.prepareRegister(regDetails.mobileNo, regDetails.password, regDetails.name, regDetails.email, regDetails.country);
    return api.register(registerPayload).then((res) => {
      dispatch(actions.populateUser(result(res, 'data', {})));
      dispatch(NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'Home'})]
      }));
    });

  }).catch((err) => {
    Toast.show(getErrorMessage(err));
    Toast.show('Error Processing the Request');
  });

};




export const chanagePassword = (currentPassword, newPassword) => (dispatch, getState) => {
  const userPhone = result(getState(), 'user.phone', {});
  const payload = middleware.prepareLogin(userPhone, currentPassword);
  const changePassPayload = middleware.prepareChangePassword(newPassword);
  return api.login(payload).then(() => {
    api.changePassword(changePassPayload);
    Toast.show(language.SETTINGS__SUCCESSFUL_PASSWORD_CHANGE);
    dispatch(NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'Home'})]
    }));
  }).catch((err) => {
    Toast.show(getErrorMessage(err));
  });

};


export const updateProfile = (payload) => (dispatch) => api.updateProfile(payload).then(() => {

  Toast.show(language.PROFILE__SUCCESSFUL_UPDATE);
  api.user().
    then((res) => dispatch(actions.populateUser(result(res, 'data', {}))));
  dispatch(NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({routeName: 'Home'})]
  }));


}).catch((err) => {
  Toast.show(getErrorMessage(err));
});
