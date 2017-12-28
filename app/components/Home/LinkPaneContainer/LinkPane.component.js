import React from 'react';
import PropTypes from 'prop-types';
import styles from './LinkPane.component.style';
import {Text} from 'react-native';
import RNIcon from '../../../assets/fonts/RNIcon';
import Touchable from '../../Touchable/Touchable.component';

class LinkPane extends React.Component {
  static propTypes = {
    icon: PropTypes.string,
    onClick: PropTypes.func,
    title: PropTypes.string,
    iconColor : PropTypes.string
  }

  render () {
    return (
      <Touchable style={styles.container} onPress={this.props.onClick}>
        <RNIcon style={{color:this.props.iconColor}} name={this.props.icon} size={styles.iconSize}/>
        <Text style={styles.title}>{this.props.title}</Text>
      </Touchable>
    );
  }
}

export default LinkPane;
