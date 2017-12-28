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
      category:''
    }
  }

  static propTypes = {
    handleSubmit: PropTypes.func,
    onCategorySelect: PropTypes.func,
    }
  onSelectValue(idx,value){
      
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
    const {invalid, submitting, handleSubmit = noop, goToRegister} = this.props;
     const dataSource = ds.cloneWithRows(["comment1","This is one more Comment","This is a different Comment"])
    return (
      <KeyboardAwareScrollView style={styles.pageContainer} contentContainerStyle={styles.contentContainer} extraHeight={120}>
        <View style={styles.formContainer}>
          
          <View style={styles.formHeader}><RNIcon name='tasks' size={15} /><Text style={styles.formHeaderText}>{'Topic:'} </Text><Text>Some Topic</Text></View>
          <View style={styles.formHeader}><RNIcon name='calendar' size={15} /><Text style={styles.formHeaderText}>{'Date:'} </Text><Text>25th July, 2016</Text></View>
          <View style={styles.formHeader}><RNIcon name='id-badge' size={15} /><Text style={styles.formHeaderText}>{'Category:'} </Text><Text>Special Projects</Text></View>

          <View style={styles.formHeader}><RNIcon name='pencil' size={15} /><Text style={styles.formHeaderText}>{'Description:'} </Text><Text>Some Description</Text></View>
           <View style={styles.formHeader}><RNIcon name='user' size={15} /><Text style={styles.formHeaderText}>{'Ministry Responsible:'} </Text><Text>Finance Minister</Text></View>

            <View style={styles.formHeader}><RNIcon name='comment' size={15} /><Text style={styles.formHeaderText}>{'Comments:'} </Text></View>
            <ListView
            dataSource={dataSource}
            renderRow={this._renderRow.bind(this)}
            enableEmptySections={true}
            renderSeparator={(sectionId, rowId) => <View key={rowId} style={{flex: 1,height: 0.5,backgroundColor: 'black'}} 
            />}/>
          
        </View>

        <RadioGroup
        onSelect = {(index, value) => console.log(index,value)}
      >
        <RadioButton value={'item1'} >
          <Text>Approve </Text>
        </RadioButton>

        <RadioButton value={'item2'}>
          <Text>Reject</Text>
        </RadioButton>


       
      </RadioGroup>

      <View style={styles.formHeader}><RNIcon name='comment' size={15} /><Text style={styles.formHeaderText}>{'Your Comments'} </Text></View>
          <Field name='Your Comments'  component={FormInput} multiline={true} numberOfLines = {4} placeholder={'Your Comments'} />
        <View style={styles.buttonContainer} >
           <Button
              buttonStyle={{backgroundColor: '#4286f4', borderRadius: 10, width: 300}}
              title='Update' 
              />

             
        </View>

       



      </KeyboardAwareScrollView>
    );
  }
}

export default UpdateIssueView;

