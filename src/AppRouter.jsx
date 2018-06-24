import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import withAppBar from './structure/withAppBar';
import Sheet from './sheet';
import Characters from './characters';

const AppRouter = props => (
  <Router>
    <Fragment>
      <Route exact path="/" component={withAppBar(Characters)} />
      <Route exact path="/character/:name" component={withAppBar(Sheet)} />
    </Fragment>
  </Router>
);

export default AppRouter;
