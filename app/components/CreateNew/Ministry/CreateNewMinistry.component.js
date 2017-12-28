import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import RNIcon from '../../../assets/fonts/RNIcon';
import {FormInput, FormButton} from '../../FormElements';
import {Field} from 'redux-form';
import noop from 'lodash/noop';
import {wrapMethodInFunction} from '../../../utils/transformer.util';
import styles from './CreateNewMinistry.component.style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Touchable from '../../Touchable/Touchable.component';
import DatePicker from 'react-native-datepicker'
import ModalDropdown from 'react-native-modal-dropdown';
import {connect} from 'react-redux';
import result from 'lodash/result';





class CreateNewMinistry extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      date:new Date(),
      category:'asdf'
    }
  }

  static propTypes = {
    handleSubmit: PropTypes.func,
    ministryName: PropTypes.string
    }
 

  render () {
    const {invalid, submitting, handleSubmit = noop, goToRegister} = this.props;
    return (
      <KeyboardAwareScrollView style={styles.pageContainer} contentContainerStyle={styles.contentContainer} extraHeight={120}>
        <View style={styles.formContainer}>


          <View style={styles.formHeader}><RNIcon name='hospital-o' size={15} /><Text style={styles.formHeaderText}>{'Ministry'} </Text></View>
          <Field name='ministryName'  component={FormInput}  placeholder={'Enter the name of the Ministry'} />

        </View>
        <View style={styles.buttonContainer} >
          <FormButton disabled={invalid || submitting} onPress={wrapMethodInFunction(handleSubmit)} text={'Submit'}/>
          
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default CreateNewMinistry;

