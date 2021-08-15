import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useTheme from '@material-ui/core/styles/useTheme';
import { useStyles } from './ImageCardStyles';

const Card = (props) => {
  const {
    imgUrl,
    headerText,
    bodyText,
    btnText,
    italicizeBody,
    verticalCenter,
    widthAdj,
    marginAdj,
  } = props;

  const classes = useStyles({ imgUrl });
  const theme = useTheme();

  const btnGridContent = (
    <Grid item>
      <Button className={classes.buttonStyle}>{btnText}</Button>
    </Grid>
  );

  return (
    <Grid
      item
      container
      direction='column'
      className={classes.mainGridStyle}
      alignItems='center'
      style={{
        width: widthAdj ? widthAdj : null,
        margin: marginAdj ? marginAdj : null,
      }}
      justifyContent={verticalCenter ? 'center' : 'space-evenly'}
    >
      <Grid item>
        <Typography
          variant='h5'
          style={{
            color: 'white',
            fontFamily: theme.fonts.futuraBold,
            paddingBottom: verticalCenter ? '2rem' : 0,
          }}
          align='center'
        >
          {headerText}
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant='h5'
          style={{
            color: 'white',
            fontFamily: theme.fonts.arial,
            fontWeight: 'bold',
            fontStyle: italicizeBody ? 'italic' : 'normal',
          }}
          align='center'
        >
          {bodyText}
        </Typography>
      </Grid>
      {btnText ? btnGridContent : null}
    </Grid>
  );
};

export default Card;
