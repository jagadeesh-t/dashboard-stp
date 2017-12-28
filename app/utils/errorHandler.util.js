// import {Alert} from 'react-native';
// import RNRestart from 'react-native-restart';
// import {wrapMethodInFunction} from './transformer.util';
// import {language} from '../config/language';
// import tracker from './googleAnalytics.util';

// import VersionNumber from 'react-native-version-number';

// const errorHandler = (e = {}, isFatal) => {
//   console.error(e); // for logging to android logs or ios logs
//   if (isFatal) {
//     tracker.trackEvent('FATAL_ERROR', `STACK_TRACE: ${e.stack}`);
//     Alert.alert(language.APP_ERROR__TITLE, `${language.APP_ERROR__BODY} App Version: ${VersionNumber.appVersion}`, [{
//       text: language.APP_ERROR__RESTART,
//       onPress: wrapMethodInFunction(RNRestart.Restart)
//     }]);
//   } else {
//     tracker.trackEvent('NON_FATAL_ERROR', e.stack);
//   }
// };

// export default errorHandler;
