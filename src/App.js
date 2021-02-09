import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';

import Layout from './pages/Layout';
import Main from './components/Main';
import NavBar from './components/NavBar';
import Routes from './Routes';
import defaultTheme from './themes/default';

const App = () => {
  return (
    <MuiThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Layout>
        <Main maxWidth={false}>
          <Router>
            <NavBar />
            <Routes />
          </Router>
        </Main>
      </Layout>
    </MuiThemeProvider>
  );
};

export default App;
