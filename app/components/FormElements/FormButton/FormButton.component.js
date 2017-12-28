import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import styles from './FormButton.component.styles';
import Touchable from '../../Touchable/Touchable.component';

const Button = ({
  children,
  disabled = false,
  onPress,
  highlightColor = 'white',
  highlightOpacity = 0.5,
  disabledStyle,
  buttonType = 'primary',
  text,
  ...extraProps,
}) => {
  let disabledViewStyle = {};
  let disabledButtonTextStyle = styles[buttonType + 'ButtonText'];
  if (disabled) {
    disabledViewStyle = disabledStyle || styles[buttonType + 'ButtonDisabled'];
    disabledButtonTextStyle = [styles[buttonType + 'ButtonText'], styles[buttonType + 'ButtonTextDisabled']];
  }
  const nestedChildren = children || (<Text style={disabledButtonTextStyle}>{text}</Text>);
  return (
    <Touchable onPress={onPress} disabled={disabled} highlightColor={highlightColor} activeOpacity={highlightOpacity}>
      <View {...extraProps} style={[styles[buttonType + 'Button'], extraProps.style, disabledViewStyle]}>
        {nestedChildren}
      </View>
    </Touchable>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  children: PropTypes.node,
  highlightColor: PropTypes.string,
  highlightOpacity: PropTypes.number,
  disabledStyle: PropTypes.object,
  text: PropTypes.string,
  buttonType: PropTypes.string
};

export default Button;
