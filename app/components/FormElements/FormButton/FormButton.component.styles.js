import theme from '../../../styles/theme.styles';

export default {
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.buttonBg,
    borderRadius: 30,
    paddingHorizontal: 15,
    height: 47
  },
  primaryButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.primary,
    borderRadius: 30,
    paddingHorizontal: 15,
    height: 47
  },
  secondaryButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: theme.primary,
    height: 47
  },
  linkButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: 'white',
    height: 47
  },
  primaryButtonText: {
    color: theme.textColorInverted,
    fontSize: theme.fontSizeNormal
  },
  secondaryButtonText: {
    color: theme.primary
  },
  linkButtonText: {
    color: theme.primary
  },
  primaryButtonDisabled: {
    backgroundColor: theme.buttonDisabledBg,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    height: 47
  },
  secondaryButtonDisabled: {
    borderColor: theme.buttonDisabledBg,
    borderRadius: 30,
    paddingHorizontal: 15,
    height: 47
  },
  linkButtonDisabled: {
    backgroundColor: 'white',
  },
  linkButtonTextDisabled: {
    color: theme.buttonDisabledBg,
  }
};
