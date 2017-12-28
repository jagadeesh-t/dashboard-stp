import React from 'react';
import PropTypes from 'prop-types';
import styles from './Banner.component.style';
import {Text, Image, View} from 'react-native';
import {currencyFormatter} from '../../../utils/transformer.util';
import bannerBg from '../../../assets/images/STPLogo.png';
import RNIcon from '../../../assets/fonts/RNIcon';
import Touchable from '../../Touchable/Touchable.component';

class Banner extends React.Component {
  static propTypes = {
    amount: PropTypes.string,
    name: PropTypes.string,
    phone: PropTypes.string,
    style: PropTypes.object,
    onLogoutClick: PropTypes.func
  }

  render () {
    const {name, phone, amount, style, onLogoutClick} = this.props;
    return (
      <Image style={styles.imageContainer}  source={bannerBg}>
        <View style={[style]}>
          <View style={styles.titleContainer}>
            
           
          </View>
         
        </View>
      </Image>
    );
  }
}

export default Banner;
