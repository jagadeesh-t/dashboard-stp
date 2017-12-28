import {StackNavigator} from 'react-navigation';
import HomePage from '../pages/Home/Home.page';
import {getTitleBar} from '../components/TitleBar/TitleBar.component';
import {getCurrentRouteTitle} from '../utils/transformer.util';
import CreateNewItem from '../pages/CreateNew/CreateNewItem.page';
import CreateIssueScreen from '../pages/Issues/CreateIssue/CreateIssue.page';
import UpdateIssueScreen from '../pages/Issues/UpdateIssue/UpdateIssue.page';
import IssueByCategory  from '../pages/Issues/IssueByCategory/IssueByCategory.page';
import MyApprovalsScreen from '../pages/MyApprovals/MyApprovals.page';
import ApproveItemScreen from '../pages/MyApprovals/ApproveItem/ApproveItem.page';
import CreateSpRequestScreen from '../pages/SpecialRequests/CreateNewSpRequests.page';
import MySpecialRequestScreen from '../pages/SpecialRequests/MySpecialRequests.page';
import SpecialRequestApprovalScreen from '../pages/SpecialRequests/SpRequestApproval/SpRequestApproval.page';
import CreateNewMinistryScreen from '../pages/CreateNew/Ministry/CreateNewMinistry.page';
import ManageCategory from '../pages/CreateNew/Category/ManageCategory.page';
import ManageMinistry from '../pages/CreateNew/Ministry/ManageMinistry.page';
import CreateNewCategory from '../pages/CreateNew/Category/CreateNewCategory.page';
import CabinetMeetingList from '../pages/CabinetMeeting/CabinetMeetingList/CabinetMeetingList.page';
import CabinetMeetingDescription from '../pages/CabinetMeeting/CabinetMeetingDescription/CabinetMeetingDescription.page';
import MyCabinetApprovalsScreen from '../pages/CabinetMeeting/MyCabinetApprovals/MyCabinetApprovals.page';
import CreateCabinetMeetingTopic from '../pages/CreateNew/CabinetMeetingTopics/CreateCabinetMeetingTopic.page';
import AddCommentScreen from '../pages/Issues/UpdateIssue/AddComment.page';
import AddCommentsCabinetScreen from '../pages/CabinetMeeting/MyCabinetApprovals/AddComment.page';



export const MainRoutes = {
  
Home: {
    screenTitle: 'Home',
    screen: HomePage,
  },

  ApproveItemScreen: {
    screenTitle : 'Approve Item',
    screen: ApproveItemScreen
  },

  
  MyApprovals: {
    screenTitle: 'My Approvals',
    screen: MyApprovalsScreen
  }, 

  UpdateIssue: {
    screenTitle : 'Update Issue',
    screen : UpdateIssueScreen
  },

  CreateIssue: {
    screenTitle : 'Create Issue',
    screen : CreateIssueScreen
  },
  IssueByCategory: {
    screenTitle : 'Issues',
    screen : IssueByCategory
  },

  CreateNewItem: {
    screenTitle : 'Create New Item',
    screen : CreateNewItem
  },
  CreateSpRequests: {
    screenTitle : 'New Special Request',
    screen : CreateSpRequestScreen
  },
  MySpecialRequestScreen:{
    screenTitle : 'Special Requests',
    screen : MySpecialRequestScreen
  },
  SpecialRequestApprovalScreen : {
    screenTitle: 'Special Request',
    screen : SpecialRequestApprovalScreen
  },
  CreateNewMinistry : {
      screenTitle : 'New Ministry',
      screen : CreateNewMinistryScreen
    },
  ManageCategory : {
    screenTitle : 'Categories',
    screen : ManageCategory
  },
  ManageMinistry : {
    screenTitle : 'Ministry',
    screen : ManageMinistry
  },
  CreateNewCategory : {
    screenTitle : 'CreateNewCategory',
    screen : CreateNewCategory
  },
  CabinetMeetingList : {
    screenTitle : 'Cabinet Meetings',
    screen : CabinetMeetingList
  },
  CabinetMeetingDescription : {
    screenTitle : '',
    screen :  CabinetMeetingDescription
  },
  MyCabinetApprovalsScreen : {
    screenTitle : 'My Cabinet Approvals',
    screen : MyCabinetApprovalsScreen
  },
  CreateCabinetMeetingTopic : {
    screenTitle : 'New Cabinet Meeting',
    screen : CreateCabinetMeetingTopic
  },
  AddCommentScreen : {
    screenTitle : 'Add Comment',
    screen : AddCommentScreen
  },
  AddCommentsCabinetScreen:{
    screenTitle : 'Add Comment',
    screen : AddCommentsCabinetScreen
  }

  
};
const MainRoutesConfig = {
  headerMode: 'screen',
  mode: 'card',
  navigationOptions: (navConfig) => ({
    cardStack: {
      gesturesEnabled: false,
    },
    headerTitle: getTitleBar(getCurrentRouteTitle(navConfig))
  })
};

const Routes = StackNavigator({
  MainRoutes: {
    screen: StackNavigator(MainRoutes, MainRoutesConfig)
  },
  
}, {
  headerMode: 'none',
  mode: 'modal'
});

export default Routes;
