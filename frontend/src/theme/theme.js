import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createTheme({
  palette: {
    primary: {},
    secondary: {},
  },
  colors: {},
  fonts: {},
});

theme = responsiveFontSizes(theme);

export default theme;
