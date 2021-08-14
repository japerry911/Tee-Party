import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme) => ({
  appBarStyle: {
    boxShadow: 'none',
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
  },
  logoImageStyle: {
    height: '4rem',
    paddingTop: '0.5rem',
  },
  toolbarStyle: {
    display: 'flex',
    alignItems: 'flex-end',
    paddingBottom: '0.25rem',
  },
  logoButtonContainerStyle: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
}));
