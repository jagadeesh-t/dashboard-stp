import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import RNIcon from '../../../assets/fonts/RNIcon';
import {FormInput, FormButton} from '../../FormElements';
import {Field} from 'redux-form';
import noop from 'lodash/noop';
import {wrapMethodInFunction} from '../../../utils/transformer.util';
import styles from './CreateCabinetMeetingTopic.component.style';
// import {language} from '../../config/language';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Touchable from '../../Touchable/Touchable.component';
import DatePicker from 'react-native-datepicker'
import ModalDropdown from 'react-native-modal-dropdown';
import {connect} from 'react-redux';
import result from 'lodash/result';
import _ from 'lodash';





class CreateCabinetMeetingTopic extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      date:new Date(),
      category:'asdf',
      categories : [],
      ministries : []
    }
  }

  static propTypes = {
    onCategorySelect: PropTypes.func,
    onMinistrySelect : PropTypes.func,
    category : PropTypes.object,
    ministries: PropTypes.object,
    topic : PropTypes.string,
    description : PropTypes.string,
    onDateChange : PropTypes.func,
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

  render () {
    const {invalid,submitting,onDateChange = noop , handleSubmit ,onCategorySelect = noop, onMinistrySelect = noop,topic,description,category, ministries} = this.props;
    return (
      <KeyboardAwareScrollView style={styles.pageContainer} contentContainerStyle={styles.contentContainer} extraHeight={120}>
        <View style={styles.formContainer}>

          <View style={styles.formHeader}><RNIcon name='id-badge' size={15} /><Text style={styles.formHeaderText}>Select Category </Text></View>
             <Touchable style={styles.categorySelectorContainer}><ModalDropdown onSelect={this.props.onCategorySelect} dropdownStyle={styles.dropdownStyle} dropdownTextStyle={{textAlign:'center'}} textStyle={{textAlign:'center',justifyContent:'space-around'}} style ={styles.categorySelector} options={this.state.categories}/></Touchable>
        
          <View style={styles.formHeader}><RNIcon name='user-o' size={15} /><Text style={styles.formHeaderText}>{'Topic'} </Text></View>
          <Field name='topic'  component={FormInput}  placeholder={'Enter Meeting Topic'} />

        <View style={styles.formHeader}><RNIcon name='comment' size={15} /><Text style={styles.formHeaderText}>{'Description'} </Text></View>
          <Field name='description'  component={FormInput} multiline={true} numberOfLines = {4} placeholder={'Enter Description'} />


          <View style={styles.formHeader}><RNIcon name='address-book-o' size={15} /><Text style={styles.formHeaderText}>Ministry Responsible</Text></View>
             <Touchable style={styles.categorySelectorContainer}><ModalDropdown onSelect={this.props.onMinistrySelect} dropdownStyle={styles.dropdownStyle} dropdownTextStyle={{textAlign:'center'}} textStyle={{textAlign:'center',justifyContent:'space-around'}} style ={styles.categorySelector} options={this.state.ministries}/></Touchable>

        </View>

                 <DatePicker
        style={{width: 300,paddingTop:20}}
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
          
        }}
        onDateChange={this.props.onDateChange}
      />


        <View style={styles.buttonContainer} >
          <FormButton disabled={invalid || submitting} onPress={wrapMethodInFunction(handleSubmit)} text={'Submit'}/>
          
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default CreateCabinetMeetingTopic;

