import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Community from '../pages/Community/Community';
import Home from '../pages/Home/Home';
import ScrollToTop from './ScrollToTop';
import GolfCourses from '../pages/GolfCourses/GolfCourses';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import CaliforniaGolfCourses from '../pages/CaliforniaGolfCourses/CaliforniaGolfCourses';

const Routes = () => {
  return (
    <Fragment>
      <ScrollToTop />
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact-us' component={Contact} />
      <Route exact path='/community' component={Community} />
      <Route exact path='/golf-courses' component={GolfCourses} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/sign-up' component={SignUp} />
      <Route
        exact
        path='/golf-courses/california'
        component={CaliforniaGolfCourses}
      />
    </Fragment>
  );
};

export default Routes;
