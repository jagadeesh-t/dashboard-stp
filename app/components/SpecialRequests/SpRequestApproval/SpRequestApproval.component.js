import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image,ListView,StyleSheet} from 'react-native';
import RNIcon from '../../../assets/fonts/RNIcon';
import {FormInput, FormButton} from '../../FormElements';
import {Field} from 'redux-form';
import noop from 'lodash/noop';
import {wrapMethodInFunction} from '../../../utils/transformer.util';
import styles from './SpRequestApproval.component.style';
// import {language} from '../../config/language';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Touchable from '../../Touchable/Touchable.component';
import DatePicker from 'react-native-datepicker'
import {connect} from 'react-redux';
import result from 'lodash/result';
import {Button} from 'react-native-elements';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'



var ds;

class UpdateIssueView extends React.Component {
  constructor(props){
    super(props)
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      date:new Date(),
      category:'',
      selectedIndex: 3
    }
  }

  componentDidMount() {
    console.log("this component mount =====");
    console.log(this.props.navigation.state.params);
    if(this.props.navigation.state.params.item.status==='Approved'){
      this.setState({selectedIndex:0});
    }else{
      this.setState({selectedIndex:1});
    }
  }

  static propTypes = {
    handleSubmit: PropTypes.func,
    onCategorySelect: PropTypes.func,
    navigation : PropTypes.object,
    onStatusChange : PropTypes.func,
    status : PropTypes.string,
  }
  

  _renderRow(rowData: string, sectionID: number, rowID: number) {
   
    
    return (
      <Touchable >
          <View style={{height:40,padding:10}}>
              <Text>{rowData}</Text>
          </View>
      </Touchable>
      );
  }

  render () {
    const {invalid, submitting, handleSubmit = noop, goToRegister , navigation , onStatusChange = noop , status} = this.props;
     const dataSource = ds.cloneWithRows(["comment1","This is one more Comment","This is a different Comment"])
    return (
      <KeyboardAwareScrollView style={styles.pageContainer} contentContainerStyle={styles.contentContainer} extraHeight={120}>
        <View style={styles.formContainer}>
          
          <View style={styles.formHeader}><RNIcon name='tasks' size={15} /><Text style={styles.formHeaderText}>{'Request Type:'} </Text><Text>{navigation.state.params.item.requestType}</Text></View>
          <View style={styles.formHeader}><RNIcon name='id-badge' size={15} /><Text style={styles.formHeaderText}>{'Request:'} </Text><Text>{navigation.state.params.item.request}</Text></View>
           <View style={styles.formHeader}><RNIcon name='calendar' size={15} /><Text style={styles.formHeaderText}>{'Date:'} </Text><Text>{navigation.state.params.item.date}</Text></View>
           <View style={styles.formHeader}><RNIcon name='user' size={15} /><Text style={styles.formHeaderText}>{'Ministry Responsible:'} </Text><Text>{navigation.state.params.item.ministry}</Text></View>
    </View>

        <RadioGroup 
        selectedIndex={this.state.selectedIndex}
        onSelect = {this.props.onStatusChange}>
          
        <RadioButton value={'Approved'} >
          <Text>Approve</Text>
        </RadioButton>
        <RadioButton value={'Rejected'}>
          <Text>Reject</Text>
        </RadioButton>

      </RadioGroup>
  
       <View style={styles.buttonContainer} >
          <FormButton disabled={invalid || submitting} onPress={wrapMethodInFunction(handleSubmit)} text={'Update'}/>
          
        </View>

      </KeyboardAwareScrollView>
    );
  }
}

export default UpdateIssueView;

