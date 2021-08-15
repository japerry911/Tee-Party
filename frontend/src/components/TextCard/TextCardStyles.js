import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme) => ({
  headerTextStyle: {
    fontFamily: theme.fonts.futuraBold,
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  },
  bodyTextStyle: {
    fontFamily: theme.fonts.arial,
  },
}));
