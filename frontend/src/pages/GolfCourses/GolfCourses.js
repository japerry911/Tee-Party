import React from 'react';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ImageCard from '../../components/ImageCard/ImageCard';
import useTheme from '@material-ui/core/styles/useTheme';
import { useStyles } from './GolfCoursesStyles';

const GolfCourses = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container className={classes.mainDivStyle}>
      <HeroHeader
        imgUrl='https://tee-party-1243912491248032048023.s3.us-east-2.amazonaws.com/golf-courses/Hero+Image_Golf+Courses+Page.jpg'
        headerText='Are you ready to find your new golf haven?'
        btnText='Search Courses'
      />
      <Grid
        item
        container
        direction='column'
        style={{ width: '40%', minHeight: '12rem' }}
        className={classes.gridContainerMidHeightStyle}
      >
        <Grid item>
          <Typography
            variant='h5'
            className={classes.headerTextStyle}
            align='center'
            gutterBottom
          >
            World-class golf experiences are just a click away.
          </Typography>
        </Grid>
        <Grid item style={{ paddingTop: '0.5rem' }}>
          <Typography
            variant='body1'
            className={classes.bodyTextStyle}
            align='center'
          >
            Tee Party connects you with the top golf courses around the world.
            As a subscriber you have access to the latest reviews and
            information on each course, so you know what to expect from the
            start.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        justifyContent='space-around'
        alignItems='center'
        className={classes.gridContainerMidHeightStyle}
        style={{ backgroundColor: theme.colors.sandColor, padding: '0 2rem' }}
      >
        <Grid item container className={classes.wideCardGridStyles}>
          <ImageCard
            imgUrl='https://tee-party-1243912491248032048023.s3.us-east-2.amazonaws.com/golf-courses/California+Courses.jpg'
            headerText='Top Courses in California'
            btnText='Explore'
            verticalCenter
          />
        </Grid>
        <Grid item container className={classes.wideCardGridStyles}>
          <ImageCard
            imgUrl='https://tee-party-1243912491248032048023.s3.us-east-2.amazonaws.com/golf-courses/Colorado+Courses.jpg'
            headerText='Top Courses in Colorado'
            btnText='Explore'
            verticalCenter
          />
        </Grid>
        <Grid item container className={classes.wideCardGridStyles}>
          <ImageCard
            imgUrl='https://tee-party-1243912491248032048023.s3.us-east-2.amazonaws.com/golf-courses/Florida+COurses.jpg'
            headerText='Top Courses in Florida'
            btnText='Explore'
            verticalCenter
          />
        </Grid>
      </Grid>
      <Grid item style={{ height: '10rem' }} />
    </Grid>
  );
};

export default GolfCourses;
