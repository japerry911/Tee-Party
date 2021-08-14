import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Forum from '../pages/Forum/Forum';
import Home from '../pages/Home/Home';
import ScrollToTop from './ScrollToTop';

const Routes = () => {
  return (
    <Fragment>
      <ScrollToTop />
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/forum' component={Forum} />
    </Fragment>
  );
};

export default Routes;
