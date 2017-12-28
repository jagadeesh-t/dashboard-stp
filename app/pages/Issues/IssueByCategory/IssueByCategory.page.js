import React, {Component} from 'react';
import IssueByCategory from '../../../components/Issues/IssueByCategory/IssueByCategory.component';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {NavigationActions} from 'react-navigation';
import result from 'lodash/result';
import {Button} from 'react-native';
import {getAllIssues, getUser} from '../../../state/actions/index.thunks';
import Touchable from '../../../components/Touchable/Touchable.component';
import RNIcon from '../../../assets/fonts/RNIcon';



const mapDispatchToProps = (dispatch) => ({

});

const mapStateToProps = (state) => ({
 category: result(state, 'category', {}),
 issues : result(state,'issues',{}),
});

class IssueByCategoryView extends Component {

  
  static propTypes = {
    navigateTo: PropTypes.func,
    category : PropTypes.object,
    issues : PropTypes.object
  
  }

 

  render () {
    const {navigateTo,category,issues} = this.props;
    return (
      <IssueByCategory category={category} issues={issues} />);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueByCategory);
