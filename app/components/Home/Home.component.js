import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.component.style';
import {RefreshControl,Text,View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Banner from './Banner/Banner.component';
import LinkPaneContainer from './LinkPaneContainer/LinkPaneContainer.component';
import result from 'lodash/result';
import noop from 'lodash/noop';

class HomeView extends React.Component {

  static propTypes = {
    onLinkClick: PropTypes.func,
    user: PropTypes.object,
    onLogoutClick: PropTypes.func,
    refreshUserData: PropTypes.func,
    onTabClick: PropTypes.func
  }
  state = {
    dashboardRefreshing: false
  }
  links = [
    [{icon: 'list-ol', id: 'IssueByCategory', title: 'Issues', iconColor:'red'},{icon: 'dashboard, tachometer', id: 'SendMoney', title: 'All Dashboards',iconColor:'green'}],
    [{icon: 'handshake-o', id: 'Receive', title: 'Special Requests',id: 'MySpecialRequestScreen',iconColor:'orange'},{icon: 'group, users', id: 'CabinetMeetingList', title: 'Cabinet Meetings'}],
    [{icon: 'plus-square', id: 'CreateNewItem', title: 'Create New',iconColor:'#7742f4'}],
  ]

 

 
  showPullSpinner = () => {
    this.setState({dashboardRefreshing: true});
  }
  hidePullSpinner = () => {
    this.setState({dashboardRefreshing: false});
  }
  onDashboardRefresh = () => {
    const {refreshUserData = Promise.resolve} = this.props;
    this.showPullSpinner();
    return refreshUserData().then(this.hidePullSpinner);
  }
  render () {
    const {onLinkClick = noop, user, onLogoutClick = noop, onTabClick = noop} = this.props;
    const name = result(user, 'userProfile.name', '--');
    const balance = result(user, 'balanceAccount.balance', '--');
    const phone = result(user, 'phone', '--');
    const userType = result(user, 'userProfile.userType', 'REGULAR');
    return (
      <KeyboardAwareScrollView  keyboardShouldPersistTaps='handled' style={styles.pageContainer} contentContainerStyle={styles.contentContainer} extraHeight={120}>
        <Banner name={name} amount={String(balance)} phone={phone.toString()} onLogoutClick={onLogoutClick}/>
        <View style={styles.textContainer}><Text style={styles.welcomeText}>Hello Mr. Prime Minister</Text></View>
         <LinkPaneContainer onClick={onLinkClick} links={this.links} />
        
       
      </KeyboardAwareScrollView >
    );
  }
}

export default HomeView;
