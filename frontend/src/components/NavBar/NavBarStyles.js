import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme) => ({
  appBarStyle: {
    boxShadow: 'none',
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
  },
  logoImageStyle: {
    height: '6rem',
    padding: '0.5rem 0',
  },
  toolbarStyle: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  logoButtonContainerStyle: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
}));
