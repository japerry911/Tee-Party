import React, { useState, useEffect } from 'react';
import Routes from './router/Routes';
import theme from './theme/theme';
import NavBar from './components/NavBar/NavBar';
import { routesArray } from './router/RouterMisc';
import { findIndex } from './misc/helpers';
import { useLocation } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

const App = () => {
  const [value, setValue] = useState(0);

  const location = useLocation();

  useEffect(() => {
    setValue(findIndex(location.pathname, routesArray));
  }, [location]);

  return (
    <div style={{ height: '100%' }}>
      <ThemeProvider theme={theme}>
        <main>
          <NavBar value={value} />
          <Routes />
        </main>
      </ThemeProvider>
    </div>
  );
};

export default App;
