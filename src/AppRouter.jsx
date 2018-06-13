import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppBar from './structure/AppBar';
import Sheet from './sheet';

const AppRouter = props => (
  <Router>
    <AppBar>
      <Route exact path="/" component={Sheet} />
    </AppBar>
  </Router>
);

export default AppRouter;
