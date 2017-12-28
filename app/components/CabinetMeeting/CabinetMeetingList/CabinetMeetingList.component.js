import React from 'react';
import {View, Text,ListView,StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import result from 'lodash/result';
import Collapsible from 'react-native-collapsible';
import Touchable from '../../Touchable/Touchable.component';
import RNIcon from '../../../assets/fonts/RNIcon';
import styles from './CabinetMeetingList.component.style'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';


var ds;
var index=0;
const mapDispatchToProps = (dispatch) => ({
 

  navigateTo: (link,item) => {
    dispatch(NavigationActions.navigate({routeName: link,params: {item}}));
  }
});



const mapStateToProps = () => ({});


class CabinetMeetingList extends React.Component {
  static propTypes = {
   
    metadata: PropTypes.string,
    amount: PropTypes.string,
    date: PropTypes.string,
    collapse : PropTypes.func,
     navigateTo : PropTypes.func
  }

   constructor(props) {

    super(props);
    
    const ds1 = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const ds2 = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const ds3 = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const ds4 = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     this.state = {
         collapsed1:true,
         collapsed2:true,
         collapsed3:true,
         collapsed4:true,
         pendingItems: ds1.cloneWithRows([]),
         cabinetApprovedItems: ds2.cloneWithRows([]),
         cabinetPendingItems: ds3.cloneWithRows([]),
         rejectedMeetings :  ds4.cloneWithRows([]),
     }
    
  }

  _goToWrapper(link,item){
  
   this.props.navigateTo(link,item);
  }


  _toggleCabinetEvents = () => {
    this.setState({ collapsed2: !this.state.collapsed2 });
    
  }

  _toggleApprovedCabinetItems = () =>  {
    this.setState({collapsed3: !this.state.collapsed3});
  }

  _toggleMyPendingEvents = () => {
    this.setState({ collapsed1: !this.state.collapsed1 });
  }

  _toggleRejectedEvents = () => {
    this.setState({collapsed4:!this.state.collapsed4});
  }
 
  _renderMyPendigApprovalsRow(rowData: string, sectionID: number, rowID: number) {
   
 
    return (
      <Touchable onPress={()=>this._goToWrapper("MyCabinetApprovalsScreen",rowData)}>
           <Text style={{paddingTop:10,fontSize:20}}>{rowData.topic}</Text>
      </Touchable>
      );
  }

  _renderPendingCabinetApprovalRow(rowData: string, sectionID: number, rowID: number) {
   
 
    return (
      <Touchable onPress={()=>this._goToWrapper("MyCabinetApprovalsScreen",rowData)}>
           <Text style={{paddingTop:10,fontSize:20}}>{rowData.topic}</Text>
      </Touchable>
      );
  }

  _renderRejectedMeetingsRow(rowData: string, sectionID: number, rowID: number) {
   
 
    return (
      <Touchable onPress={()=>this._goToWrapper("CabinetMeetingDescription",rowData)}>
           <Text style={{paddingTop:10,fontSize:20}}>{rowData.topic}</Text>
      </Touchable>
      );
  }

  _renderApprovedCabinetRow(rowData: string, sectionID: number, rowID: number) {
   
 
    return (
      <Touchable onPress={()=>this._goToWrapper("CabinetMeetingDescription",rowData)}>
           <Text style={{paddingTop:10,fontSize:20}}>{rowData.topic}</Text>
      </Touchable>
      );
  }
  componentDidMount() {
    
    let pendingItems = [];
    let cabinetPendingItems = [];
    let cabinetApprovedItems = [];
    let rejectedMeetings = [];
    for(let meeting of this.props.cabinetMeetings.data){
      console.log(meeting)
        if(meeting.status==='PENDING'){
          pendingItems.push(meeting);
        }
        if(meeting.status==='PENDING_CABINET'){
          cabinetPendingItems.push(meeting);
        }
        if(meeting.status==='APPROVED'){
          cabinetApprovedItems.push(meeting);
        }
        if(meeting.status==='REJECTED'){
          rejectedMeetings.push(meeting);
        }
        this.setState({
          pendingItems: this.state.pendingItems.cloneWithRows(pendingItems),
          cabinetPendingItems : this.state.cabinetPendingItems.cloneWithRows(cabinetPendingItems),
          cabinetApprovedItems : this.state.cabinetApprovedItems.cloneWithRows(cabinetApprovedItems),
          rejectedMeetings : this.state.rejectedMeetings.cloneWithRows(rejectedMeetings)
        })
       
        
    }
  }

  render () {
    const {type = 'ALL', metadata = '', amount = 0, date = '',data = [], category=[]} = this.props;
   
    return (
        <KeyboardAwareScrollView style={{paddingTop:50}}>
         <View style={{backgroundColor:'black',paddingTop:0.5}}></View>
          <Touchable style={styles.CollapsibleContainer} onPress={this._toggleMyPendingEvents}>
        <View style={{flex:1,alignItems:'center'}}>
        <Text style={styles.CollapsibleTextContainer}> {"My Pending Approvals"+"   "} <RNIcon  name='arrow-right'  size={styles.IconSize} /></Text>
        </View>
        <View style={{backgroundColor:'black',paddingTop:1}}></View>
         </Touchable>
          <Collapsible collapsed={this.state.collapsed1}>
          <ListView
            dataSource={this.state.pendingItems}
            renderRow={this._renderMyPendigApprovalsRow.bind(this)}
            enableEmptySections={true}
            renderSeparator={(sectionId, rowId) => <View key={rowId} style={{flex: 1,height: 1,backgroundColor: 'black',borderWidth:StyleSheet.hairlineWidth}} 
            />}/>
          </Collapsible>


        <View style={{paddingTop:20}}></View> 
        <View style={{backgroundColor:'black',paddingTop:1}}></View> 
        <Touchable style={styles.CollapsibleContainer} onPress={this._toggleCabinetEvents}>
        <View style={{flex:1,alignItems:'center'}}>
        <Text style={styles.CollapsibleTextContainer}> {"Pending Cabinet Approval"+"   "} <RNIcon  name='arrow-right'  size={styles.IconSize} /></Text>
        </View>
         </Touchable>
          <Collapsible collapsed={this.state.collapsed2}>
          <ListView
            dataSource={this.state.cabinetPendingItems}
            renderRow={this._renderPendingCabinetApprovalRow.bind(this)}
            enableEmptySections={true}
            renderSeparator={(sectionId, rowId) => <View key={rowId} style={{flex: 1,height: 1,backgroundColor: 'black',borderWidth:StyleSheet.hairlineWidth}} 
            />}/>
          </Collapsible>
          <View style={{backgroundColor:'black',paddingTop:1}}></View>

          <View style={{paddingTop:20}}></View>
          <View style={{backgroundColor:'black',paddingTop:1}}></View>
            <Touchable style={styles.CollapsibleContainer} onPress={this._toggleApprovedCabinetItems}>
        <View style={{flex:1,alignItems:'center'}}>
        <Text style={styles.CollapsibleTextContainer}> {"Approved Cabinet Items"+"   "} <RNIcon  name='arrow-right'  size={styles.IconSize} /></Text>
        </View>
         </Touchable>
          <Collapsible collapsed={this.state.collapsed3}>
          <ListView
            dataSource={this.state.cabinetApprovedItems}
            renderRow={this._renderApprovedCabinetRow.bind(this)}
            enableEmptySections={true}
            renderSeparator={(sectionId, rowId) => <View key={rowId} style={{flex: 1,height: 1,backgroundColor: 'black',borderWidth:StyleSheet.hairlineWidth}} 
            />}/>
          </Collapsible>
          <View style={{backgroundColor:'black',paddingTop:1}}></View>

          <View style={{paddingTop:20}}></View> 
        <View style={{backgroundColor:'black',paddingTop:1}}></View> 
        <Touchable style={styles.CollapsibleContainer} onPress={this._toggleRejectedEvents}>
        <View style={{flex:1,alignItems:'center'}}>
        <Text style={styles.CollapsibleTextContainer}> {"Rejected Meetings"+"   "} <RNIcon  name='arrow-right'  size={styles.IconSize} /></Text>
        </View>
         </Touchable>
          <Collapsible collapsed={this.state.collapsed4}>
          <ListView
            dataSource={this.state.rejectedMeetings}
            renderRow={this._renderRejectedMeetingsRow.bind(this)}
            enableEmptySections={true}
            renderSeparator={(sectionId, rowId) => <View key={rowId} style={{flex: 1,height: 1,backgroundColor: 'black',borderWidth:StyleSheet.hairlineWidth}} 
            />}/>
          </Collapsible>
          <View style={{backgroundColor:'black',paddingTop:1}}></View>


          </KeyboardAwareScrollView>
     
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CabinetMeetingList);
