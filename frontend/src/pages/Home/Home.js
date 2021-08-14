import React from 'react';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import { useStyles } from './HomeStyles';

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainDivStyle}>
      <HeroHeader
        headerText='Are you ready to join the Tee Party?'
        btnText="Let's Get Started"
        imgUrl='https://tee-party-1243912491248032048023.s3.us-east-2.amazonaws.com/home/Hero+Image+3.jpg'
      />
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
