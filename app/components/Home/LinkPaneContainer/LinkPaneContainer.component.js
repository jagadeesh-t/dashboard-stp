import React from 'react';
import PropTypes from 'prop-types';
import styles from './LinkPaneContainer.component.style';
import {View} from 'react-native';
import LinkPane from './LinkPane.component';

class LinkPaneContainer extends React.Component {
  static propTypes = {
    links: PropTypes.array,
    onClick: PropTypes.func
  }

  onPaneClick = (eachLinkPane) => () => {
    this.props.onClick(eachLinkPane);
  }
  render () {
    return (
      <View style={styles.container}>
        {this.props.links.map((eachGroup, j) =>
          <View key={j} style={styles.group}>
            {
              eachGroup.map(
                (eachLinkPane, i) => <LinkPane icon={eachLinkPane.icon} iconColor={eachLinkPane.iconColor} onClick={this.onPaneClick(eachLinkPane)} key={i} id={eachLinkPane.id} title={eachLinkPane.title} />
              )
            }
          </View>)}

      </View >
    );
  }
}

export default LinkPaneContainer;
