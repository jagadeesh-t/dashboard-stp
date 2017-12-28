import React from 'react';
import {View, Text,StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import noop from 'lodash/noop';
import {Button} from 'react-native-elements';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import Touchable from '../../Touchable/Touchable.component';
import RNIcon from '../../../assets/fonts/RNIcon';



const mapDispatchToProps = (dispatch) => ({
  onPressItems: (link) => {
    dispatch(NavigationActions.navigate({routeName: link}));
  },
 
});

const mapStateToProps = () => ({});

class AddNewItemView extends React.Component {

  static propTypes = {
    onLinkClick: PropTypes.func,
    onPressItems: PropTypes.func

  }
  


  render () {
    const {onPressItems = noop} = this.props;
    
    return (
    <Touchable onPress={() => onPressItems('CreateNewCategory')} style={{flex:1,flexDirection:'row'}}><Text style={{fontSize:25}}>Add </Text><RNIcon style={styles.add} size={styles.logoSize} name='plus' /></Touchable>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewItemView);




const styles = StyleSheet.create({
 		add : {
 			paddingRight:25,
 			paddingTop:10

 		},
  });


