import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const Sheet = props => (
  <div className={props.classes.content}>
    <Grid
      container
      spacing={16}
      alignItems="stretch"
      direction="column"
      justify="flex-start"
    >
      <Grid item>
        <Paper>asd</Paper>
        <Paper>asd</Paper>
        <Paper>asd</Paper>
      </Grid>
    </Grid>
  </div>
);

Sheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles({})(Sheet);
