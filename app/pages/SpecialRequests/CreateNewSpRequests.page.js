import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import CreatSpRequestView from '../../components/SpecialRequests/CreateNewSpRequest.component';
import {connect} from 'react-redux';
import {createNewSpecialRequest} from '../../state/actions/index.thunks';
import PropTypes from 'prop-types';
import * as validations from '../../utils/validator.util';
import {NavigationActions} from 'react-navigation';
import result from 'lodash/result';
import {View,Text} from 'react-native';
import {change} from 'redux-form';


const formConfig = {
  form: 'CreateSpecialRequests',
  destroyOnUnmount: true,
  
  onSubmit: (values, dispatch) => {
    const {request} = values;
  
    return dispatch(createNewSpecialRequest(request));
  },
  validate: (values) => {
    const errors = {};
    validations.required(values, ['request'], errors);
    return errors;
  }
};

const mapDispatchToProps = (dispatch) => ({
 onMinistrySelect: (idx,value) => dispatch(change('ministry', 'ministry', value)),
 onRequestTypeSelect : (idx,value) => dispatch(change('requestType','requestType',value)),
 onDateChange : (date) => dispatch(change('date','date',date))
});

const mapStateToProps = (state) => ({
ministries : result(state,'ministries',{}),
date : result(state,'form.date.values.date',new Date())
});


const CreateSpRequestForm = reduxForm(formConfig)(CreatSpRequestView);

class CreateSpRequestScreen extends Component {
  static propTypes = {
    ministries : PropTypes.object,
    onMinistrySelect: PropTypes.func,
    onRequestTypeSelect : PropTypes.func,
    onDateChange : PropTypes.func
  }
 

  render () {
    const {onMinistrySelect,onDateChange,ministries,date,onRequestTypeSelect} = this.props;
    return (
      <View>
      
      <CreateSpRequestForm onMinistrySelect={onMinistrySelect} onRequestTypeSelect={onRequestTypeSelect} onDateChange={onDateChange} date={date} ministries={ministries}/>
      </View>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateSpRequestScreen);
