import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#048ABF',
    },
    secondary: {
      main: '#49731F',
    },
  },
  colors: {
    darkBlue: '#03658C',
    lightGreen: '#98A62E',
    sandColor: '#F2C84B',
  },
  fonts: {
    arial: 'Arial',
    futuraBold: 'Futura-Bold',
  },
});

theme = responsiveFontSizes(theme);

export default theme;
