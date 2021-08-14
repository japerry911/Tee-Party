import React from 'react';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import { useStyles } from './HomeStyles';

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainDivStyle}>
      <HeroHeader />
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
