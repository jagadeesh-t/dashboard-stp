import theme from '../../styles/theme.styles';
export default {
  pageContainer: {
    padding: 0,
    backgroundColor: theme.pageContainer.backgroundColor,
  },
  contentContainer: {
    flex: 1
  },
  textContainer:{
  	alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white',
  },
  welcomeText:{
  	fontSize: theme.fontSizeLarge
  },
  refreshColor: theme.primary
};
