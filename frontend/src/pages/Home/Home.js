import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import ImageCard from '../../components/ImageCard/ImageCard';
import TextCard from '../../components/TextCard/TextCard';
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
        style={{ padding: '5rem 2rem', minHeight: '30rem' }}
        justifyContent='space-between'
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
        <Grid item container style={{ width: '50%' }}>
          <ImageCard
            imgUrl='https://tee-party-1243912491248032048023.s3.us-east-2.amazonaws.com/home/Enhance+Your+Golf+Game.jpg_2.jpg'
            headerText='Enhance Your Golf Game'
            bodyText='One Swing At A Time'
            btnText='Learn More'
          />
        </Grid>
        <Grid item container className={classes.cardGridStyles}>
          <TextCard
            headerText='Connect. Play. Repeat.'
            bodyText={
              'At Tee Party, we believe golf is more than a sport--it\'s a community. Our mantra--"Connect. Play. Repeat"--drives our motivation in transforming what it means to golf. We connect with you like-minded golf enthusiasts who are not only itching to play golf, but cultivate a community. Tee Party is committed to helping you step up your golf game, whether it be connecting you with a golf group, giving you pro-level tips, or notifying you of sales on your favorite gear. No golfer is the same, which means no Tee Party experience will be quite the same. With Tee Party, it\'s easy to personlize your golfing experience--your way, on your own time.'
            }
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
