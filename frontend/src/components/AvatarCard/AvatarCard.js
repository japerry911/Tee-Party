import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './AvatarCardStyles';

const AvatarCard = (props) => {
  const {
    imgUrl,
    headerText,
    subtitleText,
    bodyText,
    xLargeImg,
    italicizeBody,
  } = props;

  const classes = useStyles({ italicizeBody });

  const subtitleSection = (
    <Grid item>
      <Typography variant='body2' className={classes.subtitleTextStyle}>
        {subtitleText}
      </Typography>
    </Grid>
  );

  return (
    <Grid
      item
      container
      direction='column'
      alignItems='center'
      justifyContent='center'
    >
      <Grid item style={{ width: xLargeImg ? '100%' : '80%' }}>
        <img src={imgUrl} className={classes.imageStyle} />
      </Grid>
      <Grid item>
        <Typography variant='h5' className={classes.headerTextStyle}>
          {headerText}
        </Typography>
      </Grid>
      {subtitleText ? subtitleSection : null}
      <Grid item>
        <Typography variant='h6' className={classes.bodyTextStyle}>
          {bodyText}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AvatarCard;
