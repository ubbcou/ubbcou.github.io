import React, { Component, Fragment } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import configureStore from './store'
import Home from './views/Home';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f1d8b9',
    },
  },
  typography: {
    htmlFontSize: 18,
  },
});

class App extends Component {
  render() {
    return (
      <Provider store={configureStore}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Home />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
