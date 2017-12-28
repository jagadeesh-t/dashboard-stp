import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';
import noop from 'lodash/noop';
import callOnce from 'call-once-in-interval';
import Touchable from '../../Touchable/Touchable.component';
import styles from  '../Banner/Banner.component.style';
import RNIcon from '../../../assets/fonts/RNIcon';


const LogoutComponent = ({onPress = noop, disabled, children, highlightOpacity, ...extraProps}) => {
  const onpressHandler = callOnce(onPress);
  return (
    
     <Touchable ><RNIcon style={styles.logout} size={styles.logoutSize} name='power-off' /></Touchable>
  );
};

Touchable.propTypes = {
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  children: PropTypes.node,
  highlightOpacity: PropTypes.number
};

export default LogoutComponent;
