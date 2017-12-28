import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import createIssueView from '../../../components/Issues/UpdateIssue/UpdateIssue.component';
import {connect} from 'react-redux';
import {updateIssue} from '../../../state/actions/index.thunks';
import PropTypes from 'prop-types';
import * as validations from '../../../utils/validator.util';
import {NavigationActions} from 'react-navigation';
import result from 'lodash/result';
import {View,Text} from 'react-native';
import {change} from 'redux-form';


const formConfig = {
  form: 'login',
  destroyOnUnmount: true,
  
  onSubmit: (values, dispatch) => {
    const {mobileNo, password} = values;
    console.log("logging state");
    console.log(this.props)
    return dispatch(login(mobileNo, password));
  },
  
};

const mapDispatchToProps = (dispatch) => ({
 onCategorySelect: (idx,value) => dispatch(change('category', 'category', value)),
 handleClose: (topic)=> dispatch(updateIssue({topic:topic,status:'Closed'})),
});

const mapStateToProps = () => ({});


const UpdateIssueForm = reduxForm(formConfig)(createIssueView);

class UpdateIssueScreen extends Component {
  static propTypes = {
    navigation :  PropTypes.object,
    handleClose : PropTypes.func
    
  }

  render () {
   const {navigation,handleClose} = this.props;
    return (
      <View>
      
      <UpdateIssueForm navigation={navigation} handleClose={handleClose}/>
      </View>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateIssueScreen);
