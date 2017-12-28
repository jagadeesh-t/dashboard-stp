import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import AddCommentPage from '../../../components/Issues/UpdateIssue/AddComment.component';
import {connect} from 'react-redux';
import {updateIssue} from '../../../state/actions/index.thunks';
import PropTypes from 'prop-types';
import * as validations from '../../../utils/validator.util';
import {NavigationActions} from 'react-navigation';
import result from 'lodash/result';
import {View,Text} from 'react-native';
import {change} from 'redux-form';


const mapDispatchToProps = (dispatch) => ({
 onCategorySelect: (idx,value) => dispatch(change('category', 'category', value)),
 //handleSubmit : (values,dispatch) => {testfunc}
 
});

const formConfig = {
  form: 'CreateCategory',
  destroyOnUnmount: true,

  onSubmit: (values, dispatch,props) => {
    var commentsArr = [];
    var requestBody = {};
    if(props.navigation.state.params.item.comments!=undefined){
       commentsArr = props.navigation.state.params.item.comments;
      }
      requestBody.topic = props.navigation.state.params.item.topic;
      commentsArr.push(values.comment);
      requestBody.comments = commentsArr;
      console.log(requestBody);

    return dispatch(updateIssue(requestBody));
  },
};


 

const mapStateToProps = (state) => ({
   issues: result(state, 'issues', {}),
});


const AddCommentForm = reduxForm(formConfig)(AddCommentPage);

class AddCommentScreen extends Component {
   constructor(props){
    super(props)
    this.state = {
     comments : []
    }
  }

  static propTypes = {
   // handleSubmit: PropTypes.func,
    comment : PropTypes.string,
    issues : PropTypes.object,
    navigation : PropTypes.object
     
  }

    componentDidMount() {
      var commentsArray = [];
      console.log("logging props here ");
      console.log(this.props.navigation.state.params.item);
      // for(let com of this.props.navigation.state.params.item){
      //     commentsArray.push(com);
      // }
      this.setState({comments:commentsArray});
    }
  

 

  render () {


    const {handleSubmit,name,comment,issues,navigation} = this.props;
    return (
      <View>
      
      <AddCommentForm  comment={comment} issues={issues} navigation={navigation} />
      </View>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCommentScreen);
