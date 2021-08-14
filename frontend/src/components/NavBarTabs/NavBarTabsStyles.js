import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme) => ({
  tabStyle: {
    fontFamily: theme.fonts.futuraBold,
    color: '#FFF',
    opacity: 1,
    fontSize: '0.75rem',
    minWidth: '12%',
    transition: '350ms ease-in',
    borderRadius: 2,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.secondary.main,
    },
    padding: 0,
  },
  mainDivStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: '3rem',
    width: '100%',
    marginTop: 'auto',
    height: '40px',
    minHeight: '0px',
  },
}));
