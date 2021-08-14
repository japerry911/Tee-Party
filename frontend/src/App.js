import Routes from './router/Routes';
import theme from './theme/theme';
import { ThemeProvider } from '@material-ui/core/styles';

const App = () => {
  return (
    <div style={{ height: '100%' }}>
      <ThemeProvider theme={theme}>
        <main>
          <Routes />
        </main>
      </ThemeProvider>
    </div>
  );
};

export default App;
