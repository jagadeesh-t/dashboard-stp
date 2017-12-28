import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import createIssueView from '../../../components/Issues/CreateIssue/CreateIssue.component';
import {connect} from 'react-redux';
import {createNewIssue} from '../../../state/actions/index.thunks';
import PropTypes from 'prop-types';
import * as validations from '../../../utils/validator.util';
import {NavigationActions} from 'react-navigation';
import result from 'lodash/result';
import {View,Text} from 'react-native';
import {change} from 'redux-form';


const formConfig = {
  form: 'CreateIssue',
  destroyOnUnmount: true,
  
  onSubmit: (values, dispatch) => {
    const {topic,description} = values;
    return dispatch(createNewIssue(topic,description));
  },
  validate: (values) => {
    const errors = {};
    validations.required(values, ['topic', 'description'], errors);
    return errors;
  }
};

const mapDispatchToProps = (dispatch) => ({
 onCategorySelect: (idx,value) => dispatch(change('category', 'category', value)),
 onMinistrySelect : (idx,value) => dispatch((change('ministry','ministry',value))),
 onDateChange : (date) => dispatch((change('date','date',date)))
});

const mapStateToProps = (state) => ({
  category: result(state, 'category', {}),
  ministries : result(state,'ministries',{}),
  date : result(state,'form.date.values.date',new Date())
});


const CreateIssueForm = reduxForm(formConfig)(createIssueView);

class CreateIssueScreen extends Component {
  static propTypes = {
    category : PropTypes.object,
    onCategorySelect: PropTypes.func,
    ministries : PropTypes.object,
    topic : PropTypes.string,
    description : PropTypes.string,
    onMinistrySelect : PropTypes.func,
    onDateChange : PropTypes.func,

  }
 

  render () {
    const {onCategorySelect,category,ministries,topic,description,date,onMinistrySelect,onDateChange} = this.props;
    return (
      <View>
      
      <CreateIssueForm  onCategorySelect={onCategorySelect} onMinistrySelect={onMinistrySelect} category={category} ministries={ministries} topic={topic} description={description} onDateChange={onDateChange} date={date}/>
      </View>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateIssueScreen);
