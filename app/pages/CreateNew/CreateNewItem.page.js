import React, {Component} from 'react';
import CreateItemView from '../../components/CreateNew/CreateNewItems.component';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {NavigationActions} from 'react-navigation';
import result from 'lodash/result';
import {Button} from 'react-native';
import {logout, getUser} from '../../state/actions/index.thunks';
import Touchable from '../../components/Touchable/Touchable.component';
import RNIcon from '../../assets/fonts/RNIcon';
import LogoutComponent from '../../components/Home/LogoutComponent/Logout.component';



const mapDispatchToProps = (dispatch) => ({
  onPressItems: (link) => {
    console.log("link")
    dispatch(NavigationActions.navigate({link}));
  },

  tabNavigateTo: (tab = {}) => {
    const routeName = tab.id;
    dispatch(NavigationActions.navigate({routeName}));
  },

 
});

const mapStateToProps = (state) => ({
  user: result(state, 'user', {})
});

class CreateNewItem extends Component {



  static propTypes = {
    navigateTo: PropTypes.func,
    tabNavigateTo: PropTypes.func,
    onPressItems: PropTypes.func,
  

  }
  render () {
    const {navigateTo, user, onLogoutClick, refreshUserData, tabNavigateTo, onPressItems} = this.props;
    return (
      <CreateItemView user={user}  onLinkClick={navigateTo} onPressItems={onPressItems} onTabClick={tabNavigateTo} refreshUserData={refreshUserData}/>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewItem);
