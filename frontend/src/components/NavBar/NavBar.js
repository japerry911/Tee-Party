import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useStyles } from './NavBarStyles';

const NavBar = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar position='sticky' className={classes.appBarStyle}>
        <Toolbar className={classes.toolbarStyle}>
          <Button
            disableRipple
            component={Link}
            to='/'
            className={classes.logoButtonContainerStyle}
          >
            <img
              alt='Tee Time Logo'
              className={classes.logoImageStyle}
              src='https://tee-party-1243912491248032048023.s3.us-east-2.amazonaws.com/logos/white_logo_transparent_background.png'
            />
          </Button>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default NavBar;
