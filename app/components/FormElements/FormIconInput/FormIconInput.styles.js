import theme from '../../../styles/theme.styles';

export default {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingLeft: 5,
    backgroundColor: theme.inputBackground
  },
  icon: {
    color: theme.placeholderTextColor,
    width: 20
  },
  inputWrapper: {
    flex: 1,
    paddingLeft: 10
  }
};
