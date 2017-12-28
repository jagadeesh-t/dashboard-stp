import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import CreateNewCategoryPage from '../../../components/CreateNew/Category/CreateNewCategory.component';
import {connect} from 'react-redux';
import {createNewCategory} from '../../../state/actions/index.thunks';
import PropTypes from 'prop-types';
import * as validations from '../../../utils/validator.util';
import {NavigationActions} from 'react-navigation';
import result from 'lodash/result';
import {View,Text} from 'react-native';
import {change} from 'redux-form';


const mapDispatchToProps = (dispatch) => ({
 onCategorySelect: (idx,value) => dispatch(change('category', 'category', value))
});

const formConfig = {
  form: 'CreateCategory',
  destroyOnUnmount: true,

  onSubmit: (values, dispatch) => {
    const {name} = values;
    return dispatch(createNewCategory(name));
  },
};

 

const mapStateToProps = () => ({});


const CreateNewCategoryForm = reduxForm(formConfig)(CreateNewCategoryPage);

class CreateNewCategoryScreen extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    categoryName : PropTypes.string,
     
  }

 

  render () {
    const {handleSubmit,name} = this.props;
    return (
      <View>
      
      <CreateNewCategoryForm  name={name} />
      </View>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewCategoryScreen);
