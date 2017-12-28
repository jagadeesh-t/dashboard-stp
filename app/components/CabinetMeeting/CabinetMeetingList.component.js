import React from 'react';
import {View, Text,ListView,StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import result from 'lodash/result';
import Collapsible from 'react-native-collapsible';
import Touchable from '../Touchable/Touchable.component';
import RNIcon from '../../assets/fonts/RNIcon';
import styles from './CabinetMeetingList.component.style'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';

var ds;
var index=0;
const mapDispatchToProps = (dispatch) => ({
  collapse: () => {
   
    dispatch({collapsed:false});
  },
});

class CabinetMeetingList extends React.Component {
  static propTypes = {
   
    metadata: PropTypes.string,
    amount: PropTypes.string,
    date: PropTypes.string,
    collapse : PropTypes.func
   
  }

   constructor(props) {

    super(props);
    
     ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

     this.state = {
         collapsed1:true,
         collapsed2:true

     }
    
  }

  _toggleCabinetEvents = () => {
    this.setState({ collapsed2: !this.state.collapsed2 });
    
  }

 
  _renderRow(rowData: string, sectionID: number, rowID: number) {
   
 
    return (
      <Touchable>
           <Text style={{paddingTop:10,fontSize:20}}>{rowData}</Text>
      </Touchable>
      );
  }

  
  _toggleMyPendingEvents = () => {
    this.setState({ collapsed1: !this.state.collapsed1 });
  }

  

  render () {
    const {type = 'ALL', metadata = '', amount = 0, date = '',data = [], category=[]} = this.props;
    const dataSource = ds.cloneWithRows(["Meeting 1","Meeting 2"," Meeting 3"])
   
    return (
        <KeyboardAwareScrollView style={{paddingTop:50}}>
         <View style={{backgroundColor:'black',paddingTop:1}}></View>
          <Touchable style={styles.CollapsibleContainer} onPress={this._toggleMyPendingEvents}>
        <View style={{flex:1,alignItems:'center'}}>
        <Text style={styles.CollapsibleTextContainer}> {"My Pending Approvals"+"   "} <RNIcon  name='arrow-right'  size={styles.IconSize} /></Text>
        </View>
        <View style={{backgroundColor:'black',paddingTop:1}}></View>
         </Touchable>
          <Collapsible collapsed={this.state.collapsed1}>
          <ListView
            dataSource={dataSource}
            renderRow={this._renderRow.bind(this)}
            enableEmptySections={true}
            renderSeparator={(sectionId, rowId) => <View key={rowId} style={{flex: 1,height: 1,backgroundColor: 'black',borderWidth:StyleSheet.hairlineWidth}} 
            />}/>
          </Collapsible>
          <Touchable style={styles.CollapsibleContainer} onPress={this._toggleCabinetEvents}>
        <View style={{flex:1,alignItems:'center'}}>
        <Text style={styles.CollapsibleTextContainer}> {"Pending Cabinet Approval"+"   "} <RNIcon  name='arrow-right'  size={styles.IconSize} /></Text>
        </View>
         </Touchable>
          <Collapsible collapsed={this.state.collapsed2}>
          <ListView
            dataSource={dataSource}
            renderRow={this._renderRow.bind(this)}
            enableEmptySections={true}
            renderSeparator={(sectionId, rowId) => <View key={rowId} style={{flex: 1,height: 1,backgroundColor: 'black',borderWidth:StyleSheet.hairlineWidth}} 
            />}/>
          </Collapsible>
          <View style={{backgroundColor:'black',paddingTop:1}}></View>
          </KeyboardAwareScrollView>
     
    );
  }
}

export default connect(mapDispatchToProps)(CabinetMeetingList);
