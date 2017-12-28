import React from 'react';
import {View, Text,ListView,StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import result from 'lodash/result';
import Collapsible from 'react-native-collapsible';
import Touchable from '../Touchable/Touchable.component';
import RNIcon from '../../assets/fonts/RNIcon';
import styles from './MyApprovals.component.style'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
import { List, ListItem } from 'react-native-elements'



const mapDispatchToProps = (dispatch) => ({
  navigateTo: (link) => {
    dispatch(NavigationActions.navigate({routeName: link}));
  },

});

const mapStateToProps = () => ({});

class MyApprovalsView extends React.Component {
  static propTypes = {

    metadata: PropTypes.string,
    amount: PropTypes.string,
    date: PropTypes.string,
    navigateTo : PropTypes.func

  }

  constructor(props) {

    super(props);
    this._goToWrapper = this._goToWrapper.bind(this);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    

    this.state = {

     dataSource: ds.cloneWithRows(["Topic1","Topic2","Topic3"]),
   }

 }

 _goToWrapper(link){

   this.props.navigateTo(link);
 }
 


_toggleExpandedTodayEvents = () => {
  this.setState({ collapsed: !this.state.collapsed });
}




render () {
  const {type = 'ALL', metadata = '', amount = 0, date = '',data = [], categoryName=''} = this.props;
  const list = [
  {
    name: 'Topic 1',
  },
  {
    name: 'Topic 2',
  },
  {
    name: 'Topic 3',
  },
  
  ]

  return (
   
    <KeyboardAwareScrollView>
 <List containerStyle={{height:250,paddingTop:50,marginTop:20,marginBottom:70}}>
  {
    list.map((item, i) => (
      <ListItem
        key={i}
        title={item.name}
        leftIcon={{name: 'album'}}
        onPress={() => this.props.navigateTo('ApproveItemScreen')}
      />
    ))
  }
</List>
   </KeyboardAwareScrollView>
    );
}
}

export default connect(mapStateToProps, mapDispatchToProps)(MyApprovalsView);

