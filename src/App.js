import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withRoot from './withRoot';
import AppRouter from './AppRouter';
import AppBar from './AppBar';
import './App.css';

import { withStyles } from '@material-ui/core/styles';

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <AppRouter>
        <div className={classes.root}>
          <AppBar />
        </div>
      </AppRouter>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles({})(App));
