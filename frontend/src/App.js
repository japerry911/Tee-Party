import React, { useState, useEffect } from 'react';
import Routes from './router/Routes';
import theme from './theme/theme';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
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
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <ThemeProvider theme={theme}>
        <header>
          <NavBar value={value} />
        </header>
        <main>
          <Routes />
        </main>
        <footer style={{ height: '8rem' }}>
          <Footer value={value} />
        </footer>
      </ThemeProvider>
    </div>
  );
};

export default App;
