import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import Card from '../../components/ImageCard/ImageCard';
import { useStyles } from './HomeStyles';

const Home = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.mainDivStyle}>
      <HeroHeader
        headerText='Are you ready to join the Tee Party?'
        btnText="Let's Get Started"
        imgUrl='https://tee-party-1243912491248032048023.s3.us-east-2.amazonaws.com/home/Hero+Image+3.jpg'
      />
      <Grid
        item
        container
        style={{ padding: '5rem 9.5rem', minHeight: '30rem' }}
      >
        <Grid
          item
          container
          direction='column'
          className={classes.cardGridStyles}
          style={{ paddingRight: '14.7%' }}
        >
          <Grid item>
            <Typography
              variant='h1'
              className={classes.stepUpTextStyle}
              align='left'
            >
              Step
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='h1'
              className={classes.stepUpTextStyle}
              align='right'
            >
              Up
            </Typography>
          </Grid>
        </Grid>
        <Grid item container className={classes.cardGridStyles}>
          <Card
            imgUrl='https://tee-party-1243912491248032048023.s3.us-east-2.amazonaws.com/home/Enhance+Your+Golf+Game.jpg_2.jpg'
            headerText='Enhance Your Golf Game'
            bodyText='One Swing At A Time'
            btnText='Learn More'
          />
        </Grid>
        <Grid item></Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
