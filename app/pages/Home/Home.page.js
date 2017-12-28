import React, {Component} from 'react';
import HomeView from '../../components/Home/Home.component';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {NavigationActions} from 'react-navigation';
import result from 'lodash/result';
import {Button} from 'react-native';
import {logout, getUser,getAllCategories,getAllMinistry,getAllIssues,getAllCabinetMeetings} from '../../state/actions/index.thunks';
import Touchable from '../../components/Touchable/Touchable.component';
import RNIcon from '../../assets/fonts/RNIcon';
import LogoutComponent from '../../components/Home/LogoutComponent/Logout.component';



const mapDispatchToProps = (dispatch) => ({
  navigateTo: (link = {}) => {
    const routeName = link.id;
    dispatch(NavigationActions.navigate({routeName}));
  },

  getAllCategories: () => {
  
   dispatch(getAllCategories())
},

getAllCabinetMeetings: ()=> {
  dispatch(getAllCabinetMeetings())
},

getAllMinistry: () => {
  dispatch(getAllMinistry())
},
getAllIssues: () => {
  dispatch(getAllIssues()) 
},

  tabNavigateTo: (tab = {}) => {
    const routeName = tab.id;
    dispatch(NavigationActions.navigate({routeName}));
  },

  onLogoutClick: () => dispatch(logout()),
  refreshUserData: () => dispatch(getUser())
});

const mapStateToProps = (state) => ({
  user: result(state, 'user', {})
});

class HomeScreen extends Component {
  componentDidMount() {
    this.props.getAllCategories();
    this.props.getAllMinistry();
    this.props.getAllIssues();
    this.props.getAllCabinetMeetings();
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
   
    headerRight: <LogoutComponent/>,
  });

  static propTypes = {
    navigateTo: PropTypes.func,
    user: PropTypes.object,
    onLogoutClick: PropTypes.func,
    refreshUserData: PropTypes.func,
    tabNavigateTo: PropTypes.func,
    getAllCategories : PropTypes.func,
    getAllMinistry : PropTypes.func,
    getAllCabinetMeetings : PropTypes.func
  

  }
  render () {
    const {navigateTo, user, onLogoutClick, refreshUserData, tabNavigateTo} = this.props;
    return (
      <HomeView user={user} onLogoutClick={onLogoutClick} onLinkClick={navigateTo} onTabClick={tabNavigateTo} refreshUserData={refreshUserData}/>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
