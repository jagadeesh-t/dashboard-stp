import React from 'react';
import PropTypes from 'prop-types';
import {TouchableNativeFeedback, View, Platform} from 'react-native';
import theme from '../../styles/theme.styles';
import callOnce from 'call-once-in-interval';
import noop from 'lodash/noop';

const Touchable = ({onPress = noop, disabled, children, highlightColor = theme.inputBackground, ...extraProps}) => {
  const foregroundRippleSupport = TouchableNativeFeedback.canUseNativeForeground();
  const onpressHandler = callOnce(onPress);
  const background = (Platform.Version >= 21) ? TouchableNativeFeedback.Ripple(highlightColor) : TouchableNativeFeedback.SelectableBackground();
  return (
    <TouchableNativeFeedback onPress={onpressHandler} disabled={disabled} useForeground={foregroundRippleSupport} background={background}>
      <View {...extraProps}>
        {children}
      </View>
    </TouchableNativeFeedback>
  );
};

Touchable.propTypes = {
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  children: PropTypes.node,
  highlightColor: PropTypes.string
};

export default Touchable;
