import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import theme from './theme';
import configureStore from './store'
import Home from './views/Home';
import './App.css';

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
