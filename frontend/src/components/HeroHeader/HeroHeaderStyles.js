import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme) => ({
  mainDivStyle: {
    backgroundImage: (props) =>
      `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${props.imgUrl})`,
    backgroundSize: 'cover',
    height: '25rem',
    display: 'flex',
    justifyContent: 'center',
  },
  mainTextStyle: {
    color: theme.palette.secondary.main,
    fontFamily: theme.fonts.arial,
    fontWeight: 'bold',
  },
  mainGridContainerStyle: {
    height: '100%',
    width: '28%',
  },
  buttonStyle: {
    backgroundColor: theme.palette.primary.main,
    width: '15rem',
    height: '3.25rem',
    color: theme.palette.secondary.main,
    fontFamily: theme.fonts.arial,
    fontWeight: 'bold',
    opacity: 0.75,
    fontSize: '1.5rem',
    borderRadius: 10,
    transition: '350ms ease-in',
    textTransform: 'unset',
    '&:hover': {
      opacity: 1,
      background: theme.palette.primary.main,
    },
  },
}));
