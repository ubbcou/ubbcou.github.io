import { createMuiTheme } from '@material-ui/core/styles';

// Default Theme https://material-ui.com/customization/default-theme/
export default createMuiTheme({
  palette: {
    primary: {
      main: '#f1d8b9',
    },
    secondary: {
      main: '#d32f2f',
    },
  },
  typography: {
    htmlFontSize: 18,
  },
  shape: {
    borderRadius: 2
  }
});