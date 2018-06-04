import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sheet from './sheet/index.js';

const AppRouter = props => (
  <Router>
    <div>
      {props.children}

      <Route exact path="/" component={Sheet} />
    </div>
  </Router>
);

export default AppRouter;
