import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import CreateCabinetMeetingTopicPage from '../../../components/CreateNew/CabinetMeetingTopics/CreateCabinetMeetingTopic.component';
import {connect} from 'react-redux';
import {createNewCabinetMeetingTopic} from '../../../state/actions/index.thunks';
import PropTypes from 'prop-types';
import * as validations from '../../../utils/validator.util';
import {NavigationActions} from 'react-navigation';
import result from 'lodash/result';
import {View,Text} from 'react-native';
import {change} from 'redux-form';



const formConfig = {
  form: 'CreateCabinetMeetingPage',
  destroyOnUnmount: true,
  
  onSubmit: (values, dispatch) => {
    const {topic,description} = values;
    return dispatch(createNewCabinetMeetingTopic(topic,description));
  },
  validate: (values) => {
    const errors = {};
    validations.required(values, ['topic', 'description'], errors);
    return errors;
  }
};

 
const mapDispatchToProps = (dispatch) => ({
 onCategorySelect: (idx,value) => dispatch(change('CreateCabinetMeetingPage', 'category', value)),
 onMinistrySelect : (idx,value) => dispatch((change('CreateCabinetMeetingPage','ministry',value))),
 onDateChange : (date) => dispatch((change('CreateCabinetMeetingPage','date',date)))
});

const mapStateToProps = (state) => ({
  category: result(state, 'category', {}),
  ministries : result(state,'ministries',{}),
  date : result(state,'form.date.values.date',new Date())
});


const CreateNewCabintMeetingTopicScreen = reduxForm(formConfig)(CreateCabinetMeetingTopicPage);

class CreateCabinetMeetingTopic extends Component {
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
    const {onCategorySelect = noop , onMinistrySelect =noop, category , ministries,topic,description, onDateChange =noop} = this.props;
    return (
      <View>
      
      <CreateNewCabintMeetingTopicScreen  onCategorySelect={onCategorySelect} onMinistrySelect={onMinistrySelect} onDateChange={onDateChange} category={category} ministries={ministries} topic={topic} description={description} />
      </View>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCabinetMeetingTopic);
