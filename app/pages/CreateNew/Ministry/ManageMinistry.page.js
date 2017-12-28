import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import ManageMinistryPage from '../../../components/CreateNew/Ministry/ManageMinistry.component';
import {connect} from 'react-redux';
import AddNewComponent from '../../../components/CreateNew/Ministry/AddNewComponent';
import {getAllMinistry,deleteMinistry} from '../../../state/actions/index.thunks';
import PropTypes from 'prop-types';
import * as validations from '../../../utils/validator.util';
import {NavigationActions} from 'react-navigation';
import result from 'lodash/result';
import {View,Text,Alert} from 'react-native';
import {change} from 'redux-form';
import RNIcon from '../../../assets/fonts/RNIcon';


const mapDispatchToProps = (dispatch) => ({
 onCategorySelect: (idx,value) => dispatch(change('category', 'category', value)),

  getAllMinistry: () => {
  
   dispatch(getAllMinistry())
},

handleDelete: (id) => {
  Alert.alert(
    'Are you Sure You Want to Delete This Ministry from the System?',
    null,
    [
    {text: 'Yes', onPress: () => dispatch(deleteMinistry(id))},
    {text: 'Cancel', onPress: () => console.log('cancel Pressed!')},

    ]
    )

}
});

const formConfig = {
  form: 'ManageMinistry',
  destroyOnUnmount: true,
  
};

 

const mapStateToProps = (state) => ({
  ministries: result(state, 'ministries', {})
});


const ManageMinistryForm = reduxForm(formConfig)(ManageMinistryPage);

class ManageMinistryScreen extends Component {

  componentDidMount() {
    this.props.getAllMinistry();
  }

   static navigationOptions = ({ navigation, screenProps }) => ({
   
    headerRight: <AddNewComponent/>
  });


  static propTypes = {
    ministries:PropTypes.object,
    handleDelete:PropTypes.func
  }
 

  render () {
    const {goToRegister,onCategorySelect,ministries,handleDelete} = this.props;
    return (
      <View>
      
      <ManageMinistryForm  ministries={ministries} handleDelete={handleDelete}/>
      </View>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageMinistryScreen);
