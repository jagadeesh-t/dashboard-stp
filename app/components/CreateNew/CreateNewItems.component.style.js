import theme from '../../styles/theme.styles';
export default {
  pageContainer: {
    padding: 0,
    backgroundColor: theme.pageContainer.backgroundColor,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',

    backgroundColor: theme.transparent,

  },
  buttonContainer:{
    paddingTop:30
  },
  textContainer:{
  	alignItems: 'center',
    justifyContent: 'center',
    paddingTop:20,
    fontStyle:'italic'
  },
  welcomeText:{
  	fontSize: theme.fontSizeLarge
  },
  refreshColor: theme.primary
};
