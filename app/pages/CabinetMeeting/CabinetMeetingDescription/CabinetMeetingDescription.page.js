import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import CabinetMeetingDescriptionView from '../../../components/CabinetMeeting/CabinetMeetingDescription/CabinetMeetingDescription.component';
import {connect} from 'react-redux';
import {login} from '../../../state/actions/index.thunks';
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
  onSubmit: (values, dispatch) => {
    const {mobileNo, password} = values;
    return dispatch(login(mobileNo, password));
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
 onCategorySelect: (idx,value) => dispatch(change('category', 'category', value))
});

const mapStateToProps = () => ({});


const CabinetMeetingDescriptionForm = reduxForm(formConfig)(CabinetMeetingDescriptionView);

class CabinetMeetingDescriptionScreen extends Component {
  static propTypes = {
    
    navigation : PropTypes.object
    }
  

  render () {
   const {navigation} = this.props;
    return (
      <View>
      
      <CabinetMeetingDescriptionForm  navigation={navigation}/>
      </View>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CabinetMeetingDescriptionScreen);
