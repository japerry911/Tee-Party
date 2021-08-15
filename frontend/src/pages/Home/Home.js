import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import ImageCard from '../../components/ImageCard/ImageCard';
import TextCard from '../../components/TextCard/TextCard';
import useTheme from '@material-ui/core/styles/useTheme';
import Divider from '@material-ui/core/Divider';
import AvatarCard from '../../components/AvatarCard/AvatarCard';
import { useStyles } from './HomeStyles';

const Home = () => {
  const classes = useStyles();

  const theme = useTheme();

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
        style={{ paddingLeft: '2rem', paddingRight: '2rem' }}
        justifyContent='space-around'
        alignItems='flex-start'
        className={classes.gridContainerMidHeightStyle}
      >
        <Grid
          item
          container
          direction='column'
          className={classes.cardGridStyles}
          style={{ paddingRight: '8.8%' }}
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
        <Grid item container style={{ width: '40%' }}>
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
      <Grid
        item
        container
        justifyContent='space-between'
        className={classes.gridContainerMidHeightStyle}
        style={{ backgroundColor: theme.colors.sandColor }}
        alignItems='center'
      >
        <Grid item container className={classes.wideCardGridStyles}>
          <ImageCard
            imgUrl='https://tee-party-1243912491248032048023.s3.us-east-2.amazonaws.com/home/Find+your+golf+group.jpg_2.jpg'
            headerText='Find your new golf group.'
            bodyText='Use our forum to connect with like-minded golfers.'
            italicizeBody
          />
        </Grid>
        <Grid item container className={classes.wideCardGridStyles}>
          <ImageCard
            imgUrl='https://tee-party-1243912491248032048023.s3.us-east-2.amazonaws.com/home/world+class+golf+courses.jpg_2.jpg'
            headerText='World-class golf courses.'
            bodyText='Find your favorite course. Anytime, anywhere.'
            italicizeBody
          />
        </Grid>
        <Grid item container className={classes.wideCardGridStyles}>
          <ImageCard
            imgUrl='https://tee-party-1243912491248032048023.s3.us-east-2.amazonaws.com/home/Play+smarter.jpg_2.jpg'
            headerText='Play Smarter. Level Up.'
            bodyText='Gain access to the latest tips and trends.'
            italicizeBody
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        className={classes.gridContainerMidHeightStyle}
        direction='column'
        alignItems='center'
        style={{ marginBottom: '10rem' }}
      >
        <Grid item style={{ width: '25%' }}>
          <Typography
            variant='h3'
            align='center'
            style={{
              fontFamily: theme.fonts.futuraBold,
              color: theme.palette.primary.main,
              fontWeight: 'bold',
              width: '100%',
            }}
            paragraph
          >
            Why Tee Time?
          </Typography>
        </Grid>
        <Grid item style={{ width: '25%' }}>
          <Divider className={classes.dividerStyle} />
        </Grid>
        <Grid
          item
          container
          style={{ width: '100%', marginTop: '3rem' }}
          justifyContent='space-evenly'
        >
          <Grid item container className={classes.cardGridStyles}>
            <AvatarCard
              imgUrl='https://tee-party-1243912491248032048023.s3.us-east-2.amazonaws.com/home/Gary+M_.jpg'
              headerText='Gary M.'
              subtitleText='Mission Viejo, CA'
              bodyText='"With Tee Time, I not only found a community, I became a better player. Thank you for helping me find my passion!"'
              italicizeBody
              xLargeImg
            />
          </Grid>
          <Grid item container className={classes.cardGridStyles}>
            <AvatarCard
              imgUrl='https://tee-party-1243912491248032048023.s3.us-east-2.amazonaws.com/home/Jack+P.jpg'
              headerText='Jack P.'
              subtitleText='Denver, CO'
              bodyText='"My golf game has never been better. I now have access to the latest tips and tricks to help me step up my game every day."'
              italicizeBody
            />
          </Grid>
          <Grid item container className={classes.cardGridStyles}>
            <AvatarCard
              imgUrl='https://tee-party-1243912491248032048023.s3.us-east-2.amazonaws.com/home/CAthy+P.jpg'
              headerText='Cath P.'
              subtitleText='Omaha, NE'
              bodyText='"Tee Time is my stop shop for all things golf--from meeting new golf groups to learning more about courses, this is the place for golf lovers!"'
              italicizeBody
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
