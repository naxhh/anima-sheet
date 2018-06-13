import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({});

const Sheet = props => 'hi';

Sheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles({})(Sheet);
