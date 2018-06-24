import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { withCharacter } from '../data';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const Sheet = props => (
  <div>
    <Grid
      container
      spacing={16}
      alignItems="stretch"
      direction="column"
      justify="flex-start"
    >
      {props.character && (
        <Grid item>
          <Paper>{props.character.name}</Paper>
          <Paper>asd</Paper>
          <Paper>asd</Paper>
        </Grid>
      )}
    </Grid>
  </div>
);

Sheet.propTypes = {
  classes: PropTypes.object.isRequired,
  character: PropTypes.shape({
    name: PropTypes.string
  })
};

export default withStyles({})(withCharacter(Sheet));
