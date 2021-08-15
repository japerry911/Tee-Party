import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme) => ({
  mainDivStyle: {
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    width: '100%',
  },
  gridContainerMidHeightStyle: {
    minHeight: '30rem',
    marginTop: '3rem',
  },
  headerTextStyle: {
    fontFamily: theme.fonts.futuraBold,
    color: theme.palette.primary.main,
  },
}));
