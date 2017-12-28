import React from 'react';
import {View, Text,ListView,StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import result from 'lodash/result';
import Collapsible from 'react-native-collapsible';
import Touchable from '../../Touchable/Touchable.component';
import RNIcon from '../../../assets/fonts/RNIcon';
import styles from './IssueItems.component.style'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Test1 from './Test1';
import {connect} from 'react-redux';

var ds;
var index=0;
const mapDispatchToProps = (dispatch) => ({
  collapse: () => {
   
    dispatch({collapsed:false});
  },
});

class CategoryListContainer extends React.Component {
  static propTypes = {
    metadata: PropTypes.string,
    amount: PropTypes.string,
    date: PropTypes.string,
    collapse : PropTypes.func,
    issues : PropTypes.array
  }

   constructor(props) {

    super(props);
    
     ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

     this.state = {
       //  collapsed:true
     }
    
  }



  _toggleExpandedTodayEvents = () => {
    this.setState({ collapsed: !this.state.collapsed });
    
  }

 
  _renderRow(rowData: string, sectionID: number, rowID: number) {
   
       return (
      <Touchable  style={{paddingTop:25}}>
           <Test1 data={["option1","option2"]}  categorySize={this.props.category.length} collapseible={'collapsed'+rowID} categoryName={rowData} issues={this.props.issues}/>
      </Touchable>
      );
  }

  
  _toggleExpandedTodayEvents = () => {
    this.setState({ collapsed: !this.state.collapsed });
  }

  

  render () {
    const {type = 'ALL', metadata = '', amount = 0, date = '',data = [], category=[],issues=[]} = this.props;
    const dataSource = ds.cloneWithRows(category)
   
    return (
        <KeyboardAwareScrollView style={{paddingTop:100}}>
          <ListView
            dataSource={dataSource}
            renderRow={this._renderRow.bind(this)}
            enableEmptySections={true}
          />
         
          </KeyboardAwareScrollView>
     
    );
  }
}

export default connect(mapDispatchToProps)(CategoryListContainer);
