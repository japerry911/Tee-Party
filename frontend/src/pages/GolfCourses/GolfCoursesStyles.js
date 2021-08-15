import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme) => ({
  mainDivStyle: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    margin: 0,
    width: '100%',
    alignItems: 'center',
  },
  headerTextStyle: {
    fontFamily: theme.fonts.futuraBold,
    color: theme.palette.primary.main,
  },
  bodyTextStyle: {
    fontFamily: theme.fonts.arial,
    fontWeight: 'bold',
  },
  gridContainerMidHeightStyle: {
    minHeight: '30rem',
    marginTop: '3rem',
  },
  wideCardGridStyles: {
    width: '33%',
  },
}));
