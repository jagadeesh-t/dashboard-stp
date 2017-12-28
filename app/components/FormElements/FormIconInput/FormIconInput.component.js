import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import RNIcon from '../../../assets/fonts/RNIcon';
import FormInput from '../FormInput/FormInput.component';
import styles from './FormIconInput.styles';

class FormIconInput extends Component {
  render () {
    const {iconName, iconSize = 25, ...extraProps} = this.props;
    const iconStyle = {...styles.icon};
    console.log('iconName', iconName);
    return (
      <View style={styles.container}>
        <RNIcon name={iconName} size={iconSize} style={iconStyle}/>
        <View style={styles.inputWrapper}>
          <FormInput {...extraProps} containerStyle={styles.inputContainerStyle} inputStyles={styles.inputStyles}/>
        </View>
      </View>
    );
  }
}

FormIconInput.propTypes = {
  iconName: PropTypes.string,
  iconSize: PropTypes.number,
};

export default FormIconInput;
