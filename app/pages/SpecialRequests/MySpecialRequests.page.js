import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import MyspecialRequestsView from '../../components/SpecialRequests/MySpecialRequests.component';
import {connect} from 'react-redux';
import {getSpecialRequests} from '../../state/actions/index.thunks';
import PropTypes from 'prop-types';
import {NavigationActions} from 'react-navigation';
import result from 'lodash/result';
import {View,Text} from 'react-native';
import {change} from 'redux-form';


const formConfig = {
  form: 'MySpecialRequests',
  destroyOnUnmount: true,
  initialValues: {
    mobileNo: '1234567',
    password: 'qwerty123'
  },
  
 
};

const mapDispatchToProps = (dispatch) => ({
 onCategorySelect: (idx,value) => dispatch(change('category', 'category', value)),
 
 getAllSpecialRequests: () => {dispatch(getSpecialRequests()) },

});

const mapStateToProps = (state) => ({
  spRequests: result(state, 'spRequests', {}),
  
});

const MySpecialRequestScreen = reduxForm(formConfig)(MyspecialRequestsView);

class MySpecialRequesPage extends Component {
  static propTypes = {
    goToRegister: PropTypes.func,
    category : PropTypes.string,
    onCategorySelect: PropTypes.func,
    spRequests : PropTypes.object
  }
  
  componentDidMount() {
    this.props.getAllSpecialRequests();
  }

  render () {
    const {spRequests} = this.props;
    return (
      <View>
      
      <MySpecialRequestScreen spRequests={spRequests} />
      </View>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MySpecialRequesPage);
