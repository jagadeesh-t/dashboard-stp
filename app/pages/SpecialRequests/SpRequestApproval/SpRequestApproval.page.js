import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import SpecialRequestApproveView from '../../../components/SpecialRequests/SpRequestApproval/SpRequestApproval.component';
import {connect} from 'react-redux';
import {updateSpecialRequest} from '../../../state/actions/index.thunks';
import PropTypes from 'prop-types';
import * as validations from '../../../utils/validator.util';
import {NavigationActions} from 'react-navigation';
import result from 'lodash/result';
import {View,Text} from 'react-native';
import {change} from 'redux-form';


const formConfig = {
  form: 'SpecialRequestApproval',
  destroyOnUnmount: true,
  
  onSubmit: (values, dispatch,props) => {
    return dispatch(updateSpecialRequest(props.navigation.state.params.item.request));
  },
  
};

const mapDispatchToProps = (dispatch) => ({
  onStatusChange : (idx,value) => dispatch((change('status','status',value))),
});

const mapStateToProps = (state) => ({
  status : result(state,'form.status.values.status','')
});


const SpecialRequstApproveForm = reduxForm(formConfig)(SpecialRequestApproveView);

class SpRequestApproveScreen extends Component {

 

  static propTypes = {
    navigation :  PropTypes.object,
    onStatusChange : PropTypes.func,
    status : PropTypes.string
  }


  render () {
   const {navigation,onStatusChange = noop, status} = this.props;
    return (
      <View>
      
      <SpecialRequstApproveForm navigation={navigation} onStatusChange={onStatusChange} status={status}/>
      </View>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpRequestApproveScreen);
