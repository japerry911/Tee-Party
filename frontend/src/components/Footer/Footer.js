import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { footerRoutesArray } from '../../router/RouterMisc';
import { useStyles } from './FooterStyles';

const Footer = ({ value }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar position='sticky' className={classes.appBarStyle}>
        <Toolbar className={classes.toolbarStyle}>
          <Tabs
            value={value}
            className={classes.mainDivStyle}
            classes={{ flexContainer: classes.mainDivStyle }}
          >
            {footerRoutesArray.map((routeObject, index) => {
              if (routeObject.name === 'img') {
                return (
                  <Tab
                    key={`${routeObject.name}-${index}`}
                    component={Link}
                    to={routeObject.link}
                    label={
                      <img
                        alt='Tee Time Logo'
                        className={classes.logoImageStyle}
                        src={routeObject.imgUrl}
                      />
                    }
                    className={classes.tabStyle}
                    style={{ width: '160px' }}
                  />
                );
              } else {
                return (
                  <Tab
                    key={`${routeObject.name}-${index}`}
                    component={Link}
                    to={routeObject.link}
                    label={routeObject.name}
                    className={classes.tabStyle}
                  />
                );
              }
            })}
          </Tabs>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Footer;
