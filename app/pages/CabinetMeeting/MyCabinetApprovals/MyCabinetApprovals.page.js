import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import ApproveItemView from '../../../components/CabinetMeeting/MyCabinetApprovals/MyCabinetApprovals.component';
import {connect} from 'react-redux';
import {updateCabinetMeeting} from '../../../state/actions/index.thunks';
import PropTypes from 'prop-types';
import * as validations from '../../../utils/validator.util';
import {NavigationActions} from 'react-navigation';
import result from 'lodash/result';
import {View,Text} from 'react-native';
import {change} from 'redux-form';


const formConfig = {
  form: 'login',
  destroyOnUnmount: true,
  initialValues: {
    mobileNo: '1234567',
    password: 'qwerty123'
  },
  
  
  
  validate: (values) => {
    const errors = {};
    validations.required(values, ['mobileNo', 'password'], errors);
    validations.validateMobileNo(values, ['mobileNo'], errors);
    validations.validatePassword(values, ['password'], errors);
    return errors;
  }
};

const mapDispatchToProps = (dispatch) => ({
 onCategorySelect: (idx,value) => dispatch(change('category', 'category', value)),
 handleAccept: (topic)=> dispatch(updateCabinetMeeting({topic:topic,status:'PENDING_CABINET'})),
 handleReject: (topic)=> dispatch(updateCabinetMeeting({topic:topic,status:'REJECTED'}))
});

const mapStateToProps = () => ({});


const ApproveItemForm = reduxForm(formConfig)(ApproveItemView);

class MyCabinetApprovalsScreen extends Component {

static propTypes = {
    handleAccept : PropTypes.func,
    handleReject : PropTypes.func
     
  }

  render () {
   const {navigation,handleAccept,handleReject} = this.props;
    return (
      <View>
      
      <ApproveItemForm navigation={navigation} handleAccept={handleAccept} handleReject={handleReject} />
      </View>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCabinetApprovalsScreen);
