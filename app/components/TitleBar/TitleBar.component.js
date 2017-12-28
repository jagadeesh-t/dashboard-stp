import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import styles from './TitleBar.component.style';

class TitleBar extends Component {
  static propTypes = {
    title: PropTypes.string
  }
  render () {
    const {title} = this.props;
    return (
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
}

export default TitleBar;

export const getTitleBar = (title) => <TitleBar title={title}/>;
