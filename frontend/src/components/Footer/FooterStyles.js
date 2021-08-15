import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme) => ({
  logoImageStyle: {
    height: '4rem',
    paddingTop: '0.5rem',
    height: '100%',
    position: 'absolute',
  },
  logoButtonContainerStyle: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
    height: '100%',
  },
  tabStyle: {
    fontFamily: theme.fonts.futuraBold,
    color: '#FFF',
    opacity: 1,
    fontSize: '0.75rem',
    transition: '350ms ease-in',
    borderRadius: 2,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.secondary.main,
    },
    padding: 0,
  },
  mainDivStyle: {
    width: '100%',
    height: '30%',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  appBarStyle: {
    height: '100%',
  },
  toolbarStyle: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
}));
