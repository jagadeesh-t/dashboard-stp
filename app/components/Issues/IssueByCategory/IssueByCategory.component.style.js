import theme from '../../../styles/theme.styles';
export default {
  pageContainer: [theme.pageContainer, {
    flex: 1,
    paddingHorizontal: 0,
    paddingBottom: 0
  }],
  titleContainer: {
    paddingHorizontal: 20,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  balance: {
    fontWeight: theme.fontWeightBold
  },
  subtext: {
    fontSize: theme.fontSizeNormal,
    color: theme.textColor,
    fontWeight: theme.fontWeightLight
  },
  filterBar: {
    backgroundColor: theme.ternary,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  selectedFilter: {
    backgroundColor: theme.ternaryLight
  },
  filterTab: {
    paddingVertical: 3,
    flex: 1
  },
  filterText: {
    textAlign: 'center',
    padding: 10,
    color: theme.contrast
  },
  labelItemContainer: {
    height: 40
  },
  labelItem: {
    backgroundColor: theme.contrast
  },
  paginateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  paginateControl: {
    padding: 10,
    color: theme.contrast,
    fontSize: theme.fontSizeMedium
  },
  paginateStatus: {
    paddingHorizontal: 5
  },
  refresh: {
    fontSize: 15,
    color: theme.warning
  }
};
