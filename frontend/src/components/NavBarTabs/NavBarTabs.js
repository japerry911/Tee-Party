import React, { Fragment } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Divider from '@material-ui/core/Divider';
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
        <Tab
          style={{ minWidth: '10px', opacity: 1 }}
          label=''
          icon={
            <Divider
              orientation='vertical'
              flexItem
              className={classes.dividerStyle}
            />
          }
          disabled
        />
        <Tab
          key='sign-up-5'
          component={Link}
          to='/sign-up'
          label='Sign Up'
          className={classes.tabStyle}
        />
      </Tabs>
    </Fragment>
  );
};

export default NavBarTabs;
