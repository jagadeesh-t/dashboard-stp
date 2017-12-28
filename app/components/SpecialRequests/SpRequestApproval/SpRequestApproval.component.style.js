import theme from '../../../styles/theme.styles';
export default {
  pageContainer: [theme.pageContainer, {
    flexDirection: 'column'
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
   
    flex: 3,
    justifyContent: 'center'
  },
  buttonContainer: {
    flex: 2,
    paddingTop:50,
     justifyContent: 'space-around',
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
  registerText: {
    textAlign: 'right',
    fontSize: 13,
    color: theme.warning,
    fontWeight: theme.fontWeightMedium
  },
  linkTextContainer: {
    paddingVertical: 20
  },
  categorySelector:{
    flex:1,
    width:330,
    height:30,
    borderColor:'black',
    justifyContent:'space-around',
    borderWidth:1, 
    borderRadius: 1,

  },
  categorySelectorContainer:{
    paddingTop:30,
    paddingBottom:30
  },
  dropdownStyle:{
    width:250
  }
};
