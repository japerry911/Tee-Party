import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import ImageCard from '../../components/ImageCard/ImageCard';
import useTheme from '@material-ui/core/styles/useTheme';
import { californiaSlides } from '../../misc/slides';
import { useStyles } from './CaliforniaGolfCoursesStyles';

const CaliforniaGolfCourses = () => {
  const classes = useStyles();
  const theme = useTheme();

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
        className={classes.gridContainerMidHeightStyle}
        style={{ marginTop: '5rem', minHeight: '5rem' }}
      >
        <Typography
          className={classes.headerTextStyle}
          variant='h3'
          gutterBottom
          align='center'
        >
          Top 10 Golf Courses in California
        </Typography>
      </Grid>
      <Grid
        item
        container
        justifyContent='space-evenly'
        className={classes.gridContainerMidHeightStyle}
        style={{ backgroundColor: theme.colors.sandColor, padding: '1rem' }}
      >
        {californiaSlides.map((slide, idx) => (
          <ImageCard
            key={`ca-${idx}`}
            imgUrl={slide.imgUrl}
            headerText={slide.name}
            btnText='Learn More'
            widthAdj='20%'
            marginAdj='1rem'
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default CaliforniaGolfCourses;
