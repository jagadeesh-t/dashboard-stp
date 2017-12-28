import React from 'react';
import {View, Text, FlatList, RefreshControl} from 'react-native';
import styles from './IssueByCategory.component.style';
import PropTypes from 'prop-types';
import Touchable from '../../Touchable/Touchable.component';
import RNIcon from '../../../assets/fonts/RNIcon';
import noop from 'lodash/noop';
import { Tabs, Tab, Icon } from 'react-native-elements';
import Test1 from './Test1';
import Test2 from './Test2';
import TabNavigator from 'react-native-tab-navigator';
import CategoryListContainer from './CategoryList.component';



class IssueByCategoryView extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedTab: 'pending',
      pendingCategories: [],
      archivedCategories: [],
      pendingIssues : [],
      archivedIssues : [],
      pendingBadgeText : '0',
      closedBadgeText : '0'
    }
  }

  static propTypes = {
    category : PropTypes.object,
    }

  changeTab (selectedTab) {
    this.setState({selectedTab})
  }

    componentDidMount() {
    let pendingIssuesArray =[];
    let archivedIssuesArray = [];
    let pendingCategoriesArray = [];
    let archivedCategoriesArray = [];
    for(let cat of this.props.category.data){
      for(let is of this.props.issues.data){
        if(is.category===cat.name && is.status==='Pending' && !pendingCategoriesArray.includes(cat.name)){
        pendingCategoriesArray.push(cat.name);
      }
      if(is.category===cat.name && is.status==='Closed' && !archivedCategoriesArray.includes(cat.name)){
        archivedCategoriesArray.push(cat.name);
      }
    }
  }

    for(let issue of this.props.issues.data){
        
        if(issue.status==='Pending'){
          pendingIssuesArray.push(issue);
        }
        if(issue.status==='Closed'){
          archivedIssuesArray.push(issue);
        }

      }
    this.setState({pendingCategories:pendingCategoriesArray});
    this.setState({pendingIssues:pendingIssuesArray});
    this.setState({archivedIssues:archivedIssuesArray});
    this.setState({archivedCategories:archivedCategoriesArray});
    this.setState({pendingBadgeText:pendingIssuesArray.length.toString()});
    this.setState({closedBadgeText:archivedIssuesArray.length.toString()})
    

  }




  render () {
    const {transactionList = [],onPrevResult = noop,category,issues} = this.props;
    const { selectedTab } = this.state.selectedTab;
    return (
    
   <TabNavigator tabBarStyle={{top:4,paddingTop:10}}>
  <TabNavigator.Item
    selected={this.state.selectedTab === 'pending'}
    title="Pending"
    renderIcon={() => <Icon color={'#f26060'} name='schedule' size={30} />}
    renderSelectedIcon={() => <Icon color={'#f26060'} name='schedule' size={30} />}
    badgeText={this.state.pendingBadgeText}
    onPress={() => this.setState({ selectedTab: 'pending' })}>
    <CategoryListContainer category={this.state.pendingCategories} issues={this.state.pendingIssues}/>
  </TabNavigator.Item>
  
  <TabNavigator.Item
    selected={this.state.selectedTab === 'closed'}
    title="Closed"
    renderIcon={() => <Icon color={'#6296f9'} name='highlight-off' size={30} />}
    renderSelectedIcon={() => <Icon color={'#6296f9'} name='highlight-off' size={30} />}
    badgeText={this.state.closedBadgeText}
    onPress={() => this.setState({ selectedTab: 'closed' })}>
    <CategoryListContainer category={this.state.archivedCategories} issues={this.state.archivedIssues}/>
  </TabNavigator.Item>
</TabNavigator>

     
      );
  }
}

export default IssueByCategoryView;
