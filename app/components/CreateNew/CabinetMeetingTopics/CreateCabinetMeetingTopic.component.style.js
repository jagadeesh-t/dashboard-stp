import theme from '../../../styles/theme.styles';
import StyleSheet from 'react-native';
export default {
  pageContainer: [theme.pageContainer, {
    flexDirection: 'column',
  }],
  contentContainer: {
    justifyContent: 'space-around',
    
  },
  titleContainer: {
    flex: 1
  },
  logoContainer: {
    height: 120,
    paddingBottom: 10
  },
  formContainer: {
   
    flex: 1,
    

  },
  buttonContainer: {
    flex: 1,
    paddingVertical: 0,
    justifyContent: 'flex-end',
    paddingBottom:20,
    paddingTop : 20
  },
  logo: {
    flex: 1,
    height: null,
    width: null
  },
  subTitle: {
    fontSize: theme.fontSizeNormal,
    paddingBottom: 30,
    color: theme.textColor
  },
  logoSize: 80,

  formHeader: {
    flexDirection: 'row',
    paddingTop:25,
    paddingBottom:10
  },
  formHeaderText: {
    fontWeight: theme.fontWeightBold,
    fontSize: theme.fontSizeNormal,
    color: theme.textColor,
    paddingLeft: 10
  },
  
  
  dropdownStyle:{
    width:250
  },
  separator:{
    flex:1,
    height: 2,
    backgroundColor: 'black',
  }
};
