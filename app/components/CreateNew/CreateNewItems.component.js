import React from 'react';
import styles from './CreateNewItems.component.style';
import {View, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import noop from 'lodash/noop';
import {Button} from 'react-native-elements';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';



const mapDispatchToProps = (dispatch) => ({
  onPressItems: (link) => {
    dispatch(NavigationActions.navigate({routeName: link}));
  },
 
});

const mapStateToProps = () => ({});

class CreateNewItemView extends React.Component {

  static propTypes = {
    onLinkClick: PropTypes.func,
    onPressItems: PropTypes.func

  }
  


  render () {
    const {onPressItems = noop} = this.props;
    
    return (
      <KeyboardAwareScrollView  keyboardShouldPersistTaps='handled' style={styles.pageContainer} contentContainerStyle={styles.contentContainer} extraHeight={120}>

        <View style={styles.contentContainer}>
          <Text style={styles.textContainer}>You can Create New Items Under Each Section</Text>
          <View style={styles.buttonContainer}>
            <Button
              iconRight
              icon={{name: 'arrow-right', type: 'font-awesome'}}
              buttonStyle={{backgroundColor: '#e24444', borderRadius: 10, width: 300}}
              title='Issues' 
              onPress={() => onPressItems('CreateIssue')}/>
          </View>

          <View style={styles.buttonContainer}>
            <Button
              iconRight
              buttonStyle={{backgroundColor: '#0b62ed', borderRadius: 10, width: 300}}
              icon={{name: 'arrow-right', type: 'font-awesome'}}
              title='Special Requests' 
              onPress={() => onPressItems('CreateSpRequests')}/>
          </View>

          <View style={styles.buttonContainer}>
            <Button
              iconRight
              buttonStyle={{backgroundColor: 'green', borderRadius: 10, width: 300}}
              icon={{name: 'arrow-right', type: 'font-awesome'}}
              title='Cabinet Meeting Topics'
              onPress={() => onPressItems('CreateCabinetMeetingTopic')}/>
          </View>

          <View style={styles.buttonContainer}>
            <Button
              iconRight
              buttonStyle={{backgroundColor: '#f4a341', borderRadius: 10, width: 300}}
              icon={{name: 'arrow-right', type: 'font-awesome'}}
              title='Category' 
              onPress={()=> onPressItems('ManageCategory')} />
          </View>

          <View style={styles.buttonContainer}>
            <Button
              iconRight
              buttonStyle={{backgroundColor: 'grey', borderRadius: 10, width: 300}}
              icon={{name: 'arrow-right', type: 'font-awesome'}}
              title='Ministry' 
              onPress={()=> onPressItems('ManageMinistry')} />
          </View>
        </View>
      </KeyboardAwareScrollView >
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewItemView);

