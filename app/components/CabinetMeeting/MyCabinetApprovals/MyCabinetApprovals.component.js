import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image,ListView,StyleSheet,DeviceEventEmitter,AlertIOS} from 'react-native';
import RNIcon from '../../../assets/fonts/RNIcon';
import {FormInput, FormButton} from '../../FormElements';
import {Field} from 'redux-form';
import noop from 'lodash/noop';
import {wrapMethodInFunction} from '../../../utils/transformer.util';
import styles from './MyCabinetApprovals.component.style';
// import {language} from '../../config/language';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Touchable from '../../Touchable/Touchable.component';
import DatePicker from 'react-native-datepicker'
import {connect} from 'react-redux';
import result from 'lodash/result';
import {Button} from 'react-native-elements';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import {NavigationActions} from 'react-navigation';




var ds;

const mapDispatchToProps = (dispatch) => ({
  navigateTo: (link,item) => {
  dispatch(NavigationActions.navigate({routeName: link, params: {item}}));
  },

});

const mapStateToProps = () => ({});


class MyCabinetApprovals extends React.Component {
  constructor(props){
    super(props)
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      date:new Date(),
      category:'',
     commentsArray : []
    }
  }

  static propTypes = {
    handleAccept: PropTypes.func,
    handleReject : PropTypes.func,
    onCategorySelect: PropTypes.func,
    navigation : PropTypes.object,
    navigateTo : PropTypes.func
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

  componentDidMount() {

    console.log("logging props in component");
    console.log(this.props.navigation.state.params.item.comments)
    if(this.props.navigation.state.params.item.comments!==undefined)
    {
      this.setState({commentsArray:this.props.navigation.state.params.item.comments })
    }
    console.log("value of coments array here state is ===");
    console.log(this.state.commentsArray);

     DeviceEventEmitter.addListener('AddCommentCabinetMeeting', (e)=>{
      
      if(e.comments!==undefined)
    {
      console.log("in the if condition with now null comments")
      this.setState({commentsArray:e.comments })
    }
    })
  }
  approveWrapper(){
    AlertIOS.alert(
 'Approve',
 'Are you sure you want to Approve ?',
 [
   {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
   {text: 'Yes', onPress: () => this.props.handleAccept(this.props.navigation.state.params.item.topic)},
 ],
);
  }

  rejectWrapper(){
    AlertIOS.alert(
 'Approve',
 'Are you sure you want to Reject ?',
 [
   {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
   {text: 'Yes', onPress: () => this.props.handleReject(this.props.navigation.state.params.item.topic)},
 ],
);
  }
 
  render () {
    const {invalid, submitting, handleReject = noop,handleAccept=noop,goToRegister,navigation,navigateTo} = this.props;
     const dataSource = ds.cloneWithRows(this.state.commentsArray)
    return (
      <KeyboardAwareScrollView style={styles.pageContainer} contentContainerStyle={styles.contentContainer} extraHeight={120}>
        <View style={styles.formContainer}>

        <View>{navigation.state.params.item.status==='PENDING_CABINET' && <Text style={{fontStyle:'italic',paddingTop:10}}>This item is pending for cabinet Approval</Text>}</View>
          
          <View style={styles.formHeader}><RNIcon name='tasks' size={15} /><Text style={styles.formHeaderText}>{'Topic:'} </Text><Text>{navigation.state.params.item.topic}</Text></View>
          <View style={styles.formHeader}><RNIcon name='calendar' size={15} /><Text style={styles.formHeaderText}>{'Date:'} </Text><Text>{navigation.state.params.item.date}</Text></View>
          <View style={styles.formHeader}><RNIcon name='id-badge' size={15} /><Text style={styles.formHeaderText}>{'Category:'} </Text><Text>{navigation.state.params.item.category}</Text></View>

          <View style={styles.formHeader}><RNIcon name='pencil' size={15} /><Text style={styles.formHeaderText}>{'Description:'} </Text><Text>{navigation.state.params.item.description}</Text></View>
           <View style={styles.formHeader}><RNIcon name='user' size={15} /><Text style={styles.formHeaderText}>{'Ministry Responsible:'} </Text><Text>{navigation.state.params.item.ministry}</Text></View>

            <View style={styles.formHeader}><RNIcon name='comment' size={15} /><Text style={styles.formHeaderText}>{'Comments:'} </Text></View>
            <ListView
            dataSource={dataSource}
            renderRow={this._renderRow.bind(this)}
            enableEmptySections={true}
            renderSeparator={(sectionId, rowId) => <View key={rowId} style={{flex: 1,height: 0.5,backgroundColor: 'black'}} 
            />}/>
          
        </View>

        <View style={styles.buttonContainer} >
           <Button
              onPress={() => navigateTo('AddCommentsCabinetScreen',navigation.state.params.item)}
              buttonStyle={{backgroundColor: '#4286f4', borderRadius: 10, width: 300}}
              title='Add Comments >' 
              />
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-around',marginBottom:30}}>
           

           <Button
              onPress={() => this.approveWrapper()}
              buttonStyle={{backgroundColor: 'green', width: 180,marginRight:30}}
              title='Approve' 
              />
             
              <Button
              onPress={() => this.rejectWrapper()}
              buttonStyle={{backgroundColor: 'red',  width: 180}}
              title='Reject' 
              />
        </View>
       



      </KeyboardAwareScrollView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCabinetApprovals);


