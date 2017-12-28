import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import RNIcon from '../../../assets/fonts/RNIcon';
import {FormInput, FormButton} from '../../FormElements';
import {Field} from 'redux-form';
import noop from 'lodash/noop';
import {wrapMethodInFunction} from '../../../utils/transformer.util';
import styles from './AddComment.component.style';
// import {language} from '../../config/language';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Touchable from '../../Touchable/Touchable.component';
import DatePicker from 'react-native-datepicker'
import ModalDropdown from 'react-native-modal-dropdown';
import {connect} from 'react-redux';
import result from 'lodash/result';





class AddComment extends React.Component {
  constructor(props){
    super(props)
    this.state = {
     comments : []
    }
  }

  static propTypes = {
    comment : PropTypes.string,
    navigation : PropTypes.object
    }

    
  

  render () {
    const {invalid, submitting, handleSubmit = noop, goToRegister,comment,navigation} = this.props;
    return (
      <KeyboardAwareScrollView style={styles.pageContainer} contentContainerStyle={styles.contentContainer} extraHeight={120}>
        <View style={styles.formContainer}>

        
          <View style={styles.formHeader}><RNIcon name='list' size={15} /><Text style={styles.formHeaderText}>{'Comments'} </Text></View>
          <Field name='comment' multiline={true} numberOfLines = {4} component={FormInput}  placeholder={'Add Comment'} />

        </View>
        <View style={styles.buttonContainer} >
          <FormButton disabled={invalid || submitting} onPress={wrapMethodInFunction(handleSubmit)} text={'Submit'}/>
          
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default AddComment;

