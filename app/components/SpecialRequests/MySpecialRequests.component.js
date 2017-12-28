import React from 'react';
import {View, Text,ListView,StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import result from 'lodash/result';
import Collapsible from 'react-native-collapsible';
import Touchable from '../Touchable/Touchable.component';
import RNIcon from '../../assets/fonts/RNIcon';
import styles from './MySpecialRequests.component.style'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
import { List, ListItem } from 'react-native-elements'
import _ from 'lodash';



const mapDispatchToProps = (dispatch) => ({
 navigateTo: (link,item) => {
  dispatch(NavigationActions.navigate({routeName: link,  params: {item}}));
},

});

const mapStateToProps = () =>({});


class MyApprovalsView extends React.Component {
  static propTypes = {

    metadata: PropTypes.string,
    amount: PropTypes.string,
    date: PropTypes.string,
    navigateTo : PropTypes.func,
    spRequests : PropTypes.object

  }

  constructor(props) {

    super(props);
    this._goToWrapper = this._goToWrapper.bind(this);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
     requestList : [],
   }

 }

 _goToWrapper(link){

   this.props.navigateTo(link);
 }
 


_toggleExpandedTodayEvents = () => {
  this.setState({ collapsed: !this.state.collapsed });
}

componentDidMount() {
  console.log("logging in this compoennt mound ===");
  console.log(this.props);
}

componentWillReceiveProps(nextProps) {

  if(!_.isEqual(this.props.spRequests,nextProps.spRequests)){
        this.setState({requestList:nextProps.spRequests.data});
    }
    
}



render () {
  const {type = 'ALL', metadata = '', amount = 0, date = '',data = [], spRequests,navigateTo} = this.props;
  const list = [
  {
    name: 'Request 1',
  },
  {
    name: 'Request 2',
  },
  {
    name: 'Request 3',
  },
  
  ]

  return (
   
    <KeyboardAwareScrollView>
 <List containerStyle={{height:250,paddingTop:50,marginTop:20,marginBottom:70}}>
  {
    this.state.requestList.map((item, i) => (
      <ListItem
        key={i}
        title={item.request}
        leftIcon={{name: 'album'}}
        onPress={() => this.props.navigateTo('SpecialRequestApprovalScreen',item)}
      />
    ))
  }
</List>
   </KeyboardAwareScrollView>
    );
}
}

export default connect(mapStateToProps, mapDispatchToProps)(MyApprovalsView);
