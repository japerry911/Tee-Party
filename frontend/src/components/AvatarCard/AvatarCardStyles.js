import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme) => ({
  imageStyle: {
    width: '100%',
  },
  headerTextStyle: {
    fontFamily: theme.fonts.futuraBold,
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  },
  subtitleTextStyle: {
    fontFamily: theme.fonts.arial,
    fontStyle: 'italic',
  },
  bodyTextStyle: {
    fontFamily: theme.fonts.arial,
    fontStyle: (props) => (props.italicizeBody ? 'italic' : 'normal'),
  },
}));
