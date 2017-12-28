import React, {Component} from 'react';
import CabinetMeetingList from '../../../components/CabinetMeeting/CabinetMeetingList/CabinetMeetingList.component';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {NavigationActions} from 'react-navigation';
import result from 'lodash/result';
import {Button} from 'react-native';
import {logout, getUser} from '../../../state/actions/index.thunks';
import Touchable from '../../../components/Touchable/Touchable.component';
import RNIcon from '../../../assets/fonts/RNIcon';



const mapDispatchToProps = (dispatch) => ({


});

const mapStateToProps = (state) => ({
 cabinetMeetings: result(state, 'cabinetMeetings', {}),
 
});


class CabinetMeetingListView extends Component {

  
  static propTypes = {
    navigateTo: PropTypes.func,
    refreshUserData: PropTypes.func,
    tabNavigateTo: PropTypes.func,
    cabinetMeetings : PropTypes.object,
    navigaion : PropTypes.object
  

  }
  render () {
    const {navigateTo, user, onLogoutClick, refreshUserData, tabNavigateTo,navigation} = this.props;
    return (
      <CabinetMeetingList  onLinkClick={navigateTo} onTabClick={tabNavigateTo} cabinetMeetings={cabinetMeetings} navigation={navigation} />);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CabinetMeetingList);
