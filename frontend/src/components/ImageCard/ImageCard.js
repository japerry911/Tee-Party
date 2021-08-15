import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useTheme from '@material-ui/core/styles/useTheme';
import { useStyles } from './ImageCardStyles';

const Card = (props) => {
  const { imgUrl, headerText, bodyText, btnText } = props;

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
      justifyContent='space-evenly'
    >
      <Grid item>
        <Typography
          variant='h3'
          style={{ color: 'white', fontFamily: theme.fonts.futuraBold }}
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
