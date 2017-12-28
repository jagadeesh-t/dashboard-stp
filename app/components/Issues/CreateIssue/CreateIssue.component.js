import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import RNIcon from '../../../assets/fonts/RNIcon';
import {FormInput, FormButton} from '../../FormElements';
import {Field} from 'redux-form';
import noop from 'lodash/noop';
import {wrapMethodInFunction} from '../../../utils/transformer.util';
import styles from './CreateIssue.component.style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Touchable from '../../Touchable/Touchable.component';
import DatePicker from 'react-native-datepicker'
import ModalDropdown from 'react-native-modal-dropdown';
import {connect} from 'react-redux';
import result from 'lodash/result';
import _ from 'lodash';





class CreateIssueView extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      date:new Date(),
      category:'asdf',
      categories : [],
      ministries : []
    }
  }

  componentDidMount() {
    let categoriesArray =[];
    let ministriesArray = [];
    for(let cat of this.props.category.data){
      categoriesArray.push(cat.name);
      this.setState({categories:categoriesArray});
    }

    for(let ministry of this.props.ministries.data){
      ministriesArray.push(ministry.ministryName);
      this.setState({ministries:ministriesArray});
    }
  }

componentWillReceiveProps(nextProps) {
    if(!_.isEqual(this.props.date,nextProps.date)){
      this.setState({date:nextProps.date});
    }
}



  static propTypes = {
    handleSubmit: PropTypes.func,
    onCategorySelect: PropTypes.func,
    onMinistrySelect : PropTypes.func,
    category : PropTypes.object,
    ministries: PropTypes.object,
    topic : PropTypes.string,
    description : PropTypes.string,
    onDateChange : PropTypes.func,
    }
  


  render () {
    const {invalid, submitting, handleSubmit = noop, goToRegister,onCategorySelect=noop,onMinistrySelect=noop,onDateChange=noop,date} = this.props;
    return (
      <KeyboardAwareScrollView style={styles.pageContainer} contentContainerStyle={styles.contentContainer} extraHeight={120}>
        <View style={styles.formContainer}>
          
          <View style={styles.formHeader}><RNIcon name='calendar' size={15} /><Text style={styles.formHeaderText}>{'Date'} </Text></View>
                <DatePicker
        style={{width: 300}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
      
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={this.props.onDateChange}
      />


          <View style={styles.formHeader}><RNIcon name='id-badge' size={15} /><Text style={styles.formHeaderText}>Select Category </Text></View>
             <Touchable style={styles.categorySelectorContainer}><ModalDropdown onSelect={this.props.onCategorySelect} dropdownStyle={styles.dropdownStyle} dropdownTextStyle={{textAlign:'center'}} textStyle={{textAlign:'center',justifyContent:'space-around'}} style ={styles.categorySelector} options={this.state.categories}/></Touchable>

          <View style={styles.formHeader}><RNIcon name='tasks' size={15} /><Text style={styles.formHeaderText}>{'Topic'} </Text></View>
          <Field name='topic'  component={FormInput} placeholder={'Enter Topic'} />

          <View style={styles.formHeader}><RNIcon name='comment' size={15} /><Text style={styles.formHeaderText}>{'Description'} </Text></View>
          <Field name='description'  component={FormInput} multiline={true} numberOfLines = {4} placeholder={'Enter Description'} />

          <View style={styles.formHeader}><RNIcon name='address-book-o' size={15} /><Text style={styles.formHeaderText}>Ministry Responsible</Text></View>
             <Touchable style={styles.categorySelectorContainer}><ModalDropdown onSelect={this.props.onMinistrySelect} dropdownStyle={styles.dropdownStyle} dropdownTextStyle={{textAlign:'center'}} textStyle={{textAlign:'center',justifyContent:'space-around'}} style ={styles.categorySelector} options={this.state.ministries}/></Touchable>


        </View>
        <View style={styles.buttonContainer} >
          <FormButton disabled={invalid || submitting} onPress={wrapMethodInFunction(handleSubmit)} text={'Next'}/>
          
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default CreateIssueView;

