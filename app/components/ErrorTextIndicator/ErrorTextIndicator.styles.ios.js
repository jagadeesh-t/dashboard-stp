import theme from '../../styles/theme.styles';

export default {
  errIcon: {
    color: theme.warning,
    paddingRight: 5,
    fontSize: theme.fontSizeSmall
  },
  errorText: {
    color: theme.warning,
    fontSize: theme.fontSizeSmall,
    fontWeight: theme.fontWeightNormal
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  }
};
