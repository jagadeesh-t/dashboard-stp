import React from 'react';
import PropTypes from 'prop-types';
import {addNavigationHelpers} from 'react-navigation';
import {connect} from 'react-redux';
import {BackHandler} from 'react-native';
import Routes from './index.routes';
import {getCurrentRouteName} from '../utils/transformer.util';

class RouterWrapper extends React.Component {
  static propTypes = {
    nav: PropTypes.object,
    dispatch: PropTypes.func
  }
  componentDidMount () {
    // FROM: https://github.com/react-community/react-navigation/issues/117
    BackHandler.addEventListener('hardwareBackPress', () => {
      const {dispatch, nav} = this.props;
      const currentRoute = getCurrentRouteName(nav);
      if (currentRoute === 'Landing') { // exit the app from landing page
        return false;
      }
      dispatch({type: 'Navigation/BACK'});
      return true;
    });
  }
  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress');
  }
  render () {
    const {dispatch, nav} = this.props;
    return <Routes navigation={addNavigationHelpers({dispatch, state: nav})} />;
  }
}

const mapStateToProps = ({nav}) => ({nav});

const mapDispatchToProps = (dispatch) => ({dispatch});

export const ConnectedRoutes = connect(mapStateToProps, mapDispatchToProps)(RouterWrapper);

export default Routes;
