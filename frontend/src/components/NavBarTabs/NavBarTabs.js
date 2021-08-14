import React, { Fragment } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { routesArray, nonNormalRouteNames } from '../../router/RouterMisc';
import { Link } from 'react-router-dom';
import { useStyles } from './NavBarTabsStyles';

const NavBarTabs = ({ value }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Tabs value={value} className={classes.mainDivStyle}>
        {routesArray
          .filter(
            (routeObject) => !nonNormalRouteNames.includes(routeObject.name)
          )
          .map((routeObject, index) => (
            <Tab
              key={`${routeObject.name}-${index}`}
              component={Link}
              to={routeObject.link}
              label={routeObject.name}
              className={classes.tabStyle}
            />
          ))}
        <Tab
          key='Login-4'
          component={Link}
          to='/login'
          label={
            <div>
              <ExitToAppIcon
                fontSize='small'
                style={{ verticalAlign: 'middle', paddingRight: '0.25rem' }}
              />
              Login
            </div>
          }
          className={classes.tabStyle}
          style={{ marginLeft: 'auto' }}
        />
      </Tabs>
    </Fragment>
  );
};

export default NavBarTabs;
