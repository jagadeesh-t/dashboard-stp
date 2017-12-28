import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image,ListView} from 'react-native';
import RNIcon from '../../../assets/fonts/RNIcon';
import {FormInput, FormButton} from '../../FormElements';
import {Field} from 'redux-form';
import noop from 'lodash/noop';
import {wrapMethodInFunction} from '../../../utils/transformer.util';
import styles from './ManageMinistry.component.style';
// import {language} from '../../config/language';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Touchable from '../../Touchable/Touchable.component';
import DatePicker from 'react-native-datepicker'
import ModalDropdown from 'react-native-modal-dropdown';
import {connect} from 'react-redux';
import result from 'lodash/result';
import {Button} from 'react-native-elements';
import _ from 'lodash';






class ManageMinistry extends React.Component {
  

  constructor(props){
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      date:new Date(),
      dataSource: ds.cloneWithRows([""]),
    }
  }

   componentWillReceiveProps(nextProps) {
    let ministryNames = [];
    if(!_.isEqual(this.props.ministries,nextProps.ministries)){
      for (let cat of nextProps.ministries.data){
        ministryNames.push(cat.ministryName);
      }
      this.setState({
      dataSource: this.state.dataSource.cloneWithRows(ministryNames)
    })
    }
  }

  static propTypes = {
    handleSubmit: PropTypes.func,
    ministries : PropTypes.object,
    handleDelete: PropTypes.func
  }
  


 _renderRow(rowData: string, sectionID: number, rowID: number) {
  
    return (
      <Touchable>
      
        <View style={{flex:1,justifyContent:'space-between',paddingBottom:10,paddingTop:10,flexDirection:'row'}}>
          <Text style={{paddingTop:10,fontSize:20}}>{rowData}</Text>
           <Button onPress={()=>this.props.handleDelete(rowData)}
              buttonStyle={{backgroundColor: '#e24444', borderRadius: 10, width: 90}}
              title='Delete' 
              />
        </View>
      
          </Touchable>
        );
      }

 render () {
  const {invalid, submitting, handleSubmit = noop,handleDelete = noop} = this.props;
  return (
    <KeyboardAwareScrollView style={styles.pageContainer} contentContainerStyle={styles.contentContainer} extraHeight={120}>
    <View style={styles.formContainer}>
    <Text style={{fontStyle:'italic',paddingBottom:10}}>Click on the Add Button to Add a New Ministry or Click on Any Ministry Name to Edit the Same</Text>
      <ListView
                style={styles.container}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
                enableEmptySections={true}
                renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}/>

    </View>
    </KeyboardAwareScrollView>
    );
}
}

export default ManageMinistry;

