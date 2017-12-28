import React from 'react';
import {View, Text,ListView,StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import result from 'lodash/result';
import Collapsible from 'react-native-collapsible';
import Touchable from '../../Touchable/Touchable.component';
import RNIcon from '../../../assets/fonts/RNIcon';
import styles from './IssueItems.component.style'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';

var ds;


const mapDispatchToProps = (dispatch) => ({
  navigateTo: (link,item) => {
  dispatch(NavigationActions.navigate({routeName: link, params: {item}}));
  },
 
});

const mapStateToProps = () => ({});

class Test1 extends React.Component {
  static propTypes = {
   
    metadata: PropTypes.string,
    amount: PropTypes.string,
    date: PropTypes.string,
    navigateTo : PropTypes.func
   
  }

   constructor(props) {

    super(props);
    this._goToWrapper = this._goToWrapper.bind(this);
     ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  
     this.state = {
      dataSource:ds,
         collapsed:true
     }
    
  }

  _goToWrapper(link,rowData){
  console.log("row data hereeeaefasf ",rowData)
   this.props.navigateTo(link,rowData);
  }
  _renderRow(rowData: string, sectionID: number, rowID: number) {
 
    return (
      <Touchable onPress={()=>this._goToWrapper("UpdateIssue",rowData)}>
          <View>
              <Text style={styles.IssueItems}>{rowData.topic}</Text>
          </View>
      </Touchable>
      );
  }

  
  _toggleCollapsible = (categoryName) => {
    var issuesArr = [];
    this.setState({ collapsed: !this.state.collapsed });
    if(this.state.collapsed){
      for(let issue of this.props.issues){
        if(categoryName===issue.category){
          issuesArr.push(issue)
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(issuesArr)
          })
        }
      }

    }
  }
 

  render () {
    const {type = 'ALL', metadata = '', amount = 0, date = '',data = [], categoryName=''} = this.props;
   
    return (
        <KeyboardAwareScrollView>
         <View style={{backgroundColor:'black',paddingTop:1}}></View>
       <Touchable style={styles.CollapsibleContainer} onPress={()=>this._toggleCollapsible(categoryName)}>
        <View style={{flex:1,alignItems:'center'}}>
        <Text style={styles.CollapsibleTextContainer}> {categoryName+"   "} <RNIcon  name='arrow-right'  size={styles.IconSize} /></Text>
        </View>
         </Touchable>
        <Collapsible collapsed={this.state.collapsed}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow.bind(this)}
            enableEmptySections={true}
            renderSeparator={(sectionId, rowId) => <View key={rowId} style={{flex: 1,height: 1,backgroundColor: 'black',borderWidth:StyleSheet.hairlineWidth}} 
            />}/>
          </Collapsible>
          </KeyboardAwareScrollView>
     
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test1);

