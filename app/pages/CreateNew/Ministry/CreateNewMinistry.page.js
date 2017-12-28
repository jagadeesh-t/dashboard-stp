import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import CreateNewMinistryPage from '../../../components/CreateNew/Ministry/CreateNewMinistry.component';
import {connect} from 'react-redux';
import {createNewMinistry} from '../../../state/actions/index.thunks';
import PropTypes from 'prop-types';
import * as validations from '../../../utils/validator.util';
import {NavigationActions} from 'react-navigation';
import result from 'lodash/result';
import {View,Text} from 'react-native';
import {change} from 'redux-form';


const mapDispatchToProps = (dispatch) => ({
 onCategorySelect: (idx,value) => dispatch(change('category', 'category', value))
});

const formConfig = {
  form: 'CreateNewMinistry',
  destroyOnUnmount: true,

  onSubmit: (values, dispatch) => {
    const {ministryName} = values;
    return dispatch(createNewMinistry(ministryName));
  },
  
};

 

const mapStateToProps = () => ({});


const CreateNewMinistryForm = reduxForm(formConfig)(CreateNewMinistryPage);

class CreateMinistryScreen extends Component {
  static propTypes = {
      ministryName : PropTypes.string
  }
 

  render () {
    const {ministryName} = this.props;
    return (
      <View>
      
      <CreateNewMinistryForm ministryName={ministryName} />
      </View>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateMinistryScreen);
