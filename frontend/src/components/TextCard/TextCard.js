import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './TextCardStyles';

const TextCard = (props) => {
  const { headerText, bodyText } = props;

  const classes = useStyles();

  return (
    <Grid item container direction='column' justifyContent='center'>
      <Grid item>
        <Typography
          variant='h5'
          className={classes.headerTextStyle}
          align='center'
          gutterBottom
        >
          {headerText}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='body2' className={classes.bodyTextStyle}>
          {bodyText}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default TextCard;
