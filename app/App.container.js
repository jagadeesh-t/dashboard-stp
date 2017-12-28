import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {ConnectedRoutes} from './routes/Router';
import {connect} from 'react-redux';

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});
// <StatusBar barStyle='dark-content' backgroundColor={theme.primary} />
class AppComponent extends React.Component {
  componentDidMount () {
    SplashScreen.hide();
  }
  render () {
    return (
      <ConnectedRoutes />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);