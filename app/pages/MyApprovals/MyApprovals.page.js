import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import MyApprovalsView from '../../components/MyApprovals/MyApprovals.component';
import {connect} from 'react-redux';
import {login} from '../../state/actions/index.thunks';
import PropTypes from 'prop-types';
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
    console.log("logging state");
    console.log(this.props)
    return dispatch(login(mobileNo, password));
  },
 
};

const mapDispatchToProps = (dispatch) => ({
 onCategorySelect: (idx,value) => dispatch(change('category', 'category', value))
});

const mapStateToProps = () => ({});


const MyApprovalsScreen = reduxForm(formConfig)(MyApprovalsView);

class MyApprovalsPage extends Component {
  static propTypes = {
    goToRegister: PropTypes.func,
    category : PropTypes.string,
     onCategorySelect: PropTypes.func
  }
 

  render () {
    const {goToRegister,onCategorySelect} = this.props;
    return (
      <View>
      
      <MyApprovalsScreen />
      </View>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyApprovalsPage);
