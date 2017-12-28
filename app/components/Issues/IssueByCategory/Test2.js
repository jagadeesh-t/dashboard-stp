import React from 'react';
import {View, Text,ListView,StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import result from 'lodash/result';
import Collapsible from 'react-native-collapsible';
import Touchable from '../../Touchable/Touchable.component';
import RNIcon from '../../../assets/fonts/RNIcon';
import styles from './IssueItems.component.style'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

var ds;

class Test2 extends React.Component {
  static propTypes = {
   
    metadata: PropTypes.string,
    amount: PropTypes.string,
    date: PropTypes.string,
   
  }

   constructor(props) {

    super(props);
    
     ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
   
    

     this.state = {

         collapsed:true
     }
    
  }
  _renderRow(rowData: string, sectionID: number, rowID: number) {
   
    
    return (
      <Touchable >
          <View>
              <Text style={styles.IssueItems}>{rowData}</Text>
          </View>
      </Touchable>
      );
  }
componentWillReceiveProps(nextProps) {
  console.log("componnet will receive");
  console.log(nextProps);
  // if(this.state.collapsed!==nextProps.collapseState){
  //   this.setState({collapsed:nextProps.collapseState})
  // }
}
  
  _toggleExpandedTodayEvents = () => {
    this.setState({ collapsed: !this.state.collapsed });
  }



  render () {
    const {type = 'ALL', metadata = '', amount = 0, date = '',data = [], categoryName=''} = this.props;
    const dataSource = ds.cloneWithRows(data)
   
    return (
        <KeyboardAwareScrollView>
       <Touchable style={styles.CollapsibleContainer} onPress={this._toggleExpandedTodayEvents}>
        <View >
        <Text style={styles.CollapsibleTextContainer}> {categoryName+"   "} <RNIcon  name='arrow-right'  size={styles.IconSize} /></Text>
        </View>
         </Touchable>
        <Collapsible collapsed={this.state.collapsed}>
          <ListView
            dataSource={dataSource}
            renderRow={this._renderRow.bind(this)}
            enableEmptySections={true}
            renderSeparator={(sectionId, rowId) => <View key={rowId} style={{flex: 1,height: 1,backgroundColor: 'black',borderWidth:StyleSheet.hairlineWidth}} 
            />}/>
          </Collapsible>
          </KeyboardAwareScrollView>
     
    );
  }
}

export default Test2;
