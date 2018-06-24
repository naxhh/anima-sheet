import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import { withCharacters } from '../data';

const styles = theme => ({
  card: {
    height: 200,
    width: 150
  },
  divider: {
    'margin-bottom': theme.spacing.unit
  },
  button: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
});

const Characters = props => (
  <Fragment>
    <Grid container justify="center" spacing={16}>
      {props.characters.map((character, key) => (
        <Grid key={key} item>
          <Link
            to={`/character/${character.name}`}
            style={{ textDecoration: 'none' }}
          >
            <Card className={props.classes.card}>
              <CardContent>
                <Typography variant="headline" align="center" component="h2">
                  {character.name}
                </Typography>

                <Divider className={props.classes.divider} />

                <Typography variant="caption">
                  {character.description}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>

    <Button
      variant="fab"
      color="primary"
      aria-label="add"
      className={props.classes.button}
    >
      <AddIcon />
    </Button>
  </Fragment>
);

Characters.propTypes = {
  classes: PropTypes.object.isRequired,
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string
    })
  )
};

export default withStyles(styles, { withTheme: true })(
  withCharacters(Characters)
);
