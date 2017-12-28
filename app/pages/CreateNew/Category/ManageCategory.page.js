import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import ManageCategoryPage from '../../../components/CreateNew/Category/ManageCategory.component';
import {connect} from 'react-redux';
import AddNewComponent from '../../../components/CreateNew/Category/AddNewComponent';
import {getAllCategories,deleteCategory} from '../../../state/actions/index.thunks';
import PropTypes from 'prop-types';
import * as validations from '../../../utils/validator.util';
import {NavigationActions} from 'react-navigation';
import result from 'lodash/result';
import {View,Text,Alert} from 'react-native';
import {change} from 'redux-form';
import RNIcon from '../../../assets/fonts/RNIcon';


const mapDispatchToProps = (dispatch) => ({
 onCategorySelect: (idx,value) => dispatch(change('category', 'category', value)),
 getAllCategories: () => {
  
   dispatch(getAllCategories())
},

handleDelete: (id) => {
  Alert.alert(
    'Are you Sure You Want to Delete This Category?',
    null,
    [
    {text: 'Yes', onPress: () => dispatch(deleteCategory(id))},
    {text: 'Cancel', onPress: () => console.log('cancel Pressed!')},

    ]
    )

}
});

const formConfig = {
  form: 'ManageCategory',
  destroyOnUnmount: true,
  
};


  
const mapStateToProps = (state) => ({
  category: result(state, 'category', {})
});


const CreateNewCategoryForm = reduxForm(formConfig)(ManageCategoryPage);

class ManageCategoryScreen extends Component {
  componentDidMount() {
  this.props.getAllCategories();
}

   static navigationOptions = ({ navigation, screenProps }) => ({
   
    headerRight: <AddNewComponent/>
  });


  static propTypes = {
    category : PropTypes.object,
     onCategorySelect: PropTypes.func,
     handleDelete:PropTypes.func
  }
 

  render () {
    const {onCategorySelect,category={},handleDelete} = this.props;
    return (
      <View>
      
      <CreateNewCategoryForm category={category} handleDelete={handleDelete}  />
      </View>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCategoryScreen);
