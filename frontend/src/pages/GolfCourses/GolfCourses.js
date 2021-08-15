import React from 'react';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './GolfCoursesStyles';

const GolfCourses = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.mainDivStyle}>
      <HeroHeader
        imgUrl='https://tee-party-1243912491248032048023.s3.us-east-2.amazonaws.com/golf-courses/Hero+Image_Golf+Courses+Page.jpg'
        headerText='Are you ready to find your new golf haven?'
        btnText='Search Courses'
      />
    </Grid>
  );
};

export default GolfCourses;
