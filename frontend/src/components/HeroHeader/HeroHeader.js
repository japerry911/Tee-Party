import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useStyles } from './HeroHeaderStyles';

const HeroHeader = (props) => {
  const { headerText, btnText, imgUrl } = props;
  const classes = useStyles({ imgUrl });

  return (
    <div className={classes.mainDivStyle}>
      <Grid
        container
        className={classes.mainGridContainerStyle}
        direction='column'
        justifyContent='center'
        alignItems='center'
      >
        <Grid item style={{ paddingBottom: '2.5rem' }} align='center'>
          <Typography className={classes.mainTextStyle} variant='h3'>
            {headerText}
          </Typography>
        </Grid>
        {btnText !== null ? (
          <Grid item>
            <Button
              disableFocusRipple
              disableRipple
              className={classes.buttonStyle}
            >
              {btnText}
            </Button>
          </Grid>
        ) : null}
      </Grid>
    </div>
  );
};

export default HeroHeader;
