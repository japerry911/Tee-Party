import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme) => ({
  mainDivStyle: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    margin: 0,
    width: '100%',
  },
  cardGridStyles: {
    width: '25%',
  },
  stepUpTextStyle: {
    fontFamily: theme.fonts.futuraBold,
    color: theme.palette.primary.main,
  },
}));
