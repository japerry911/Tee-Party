import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import { useStyles } from './CaliforniaGolfCoursesStyles';

const CaliforniaGolfCourses = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction='column'
      className={classes.mainDivStyle}
      alignItems='center'
    >
      <HeroHeader
        imgUrl='https://tee-party-1243912491248032048023.s3.us-east-2.amazonaws.com/golf-courses/Hero+Image_Golf+Courses+Page.jpg'
        headerText='Best Golf Courses in California'
        btnText='Search Courses'
      />
      <Grid
        item
        container
        direction='column'
        className={classes.gridContainerMidHeightStyle}
        style={{ marginTop: '5rem' }}
      >
        <Grid item>
          <Typography
            className={classes.headerTextStyle}
            variant='h5'
            gutterBottom
            align='center'
          >
            Top 10 Golf Courses in California
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CaliforniaGolfCourses;
