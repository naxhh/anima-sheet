import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FaceIcon from '@material-ui/icons/Face';
import GavelIcon from '@material-ui/icons/Gavel';
import GradeIcon from '@material-ui/icons/Grade';
import GroupWorkIcon from '@material-ui/icons/GroupWork';

const MainList = ({ match }) => (
  <List>
    <Link
      to={`/character/${match.params.name}`}
      style={{ textDecoration: 'none' }}
    >
      <ListItem button>
        <ListItemIcon>
          <FaceIcon />
        </ListItemIcon>
        <ListItemText primary="Character" />
      </ListItem>
    </Link>

    <ListItem button>
      <ListItemIcon>
        <GavelIcon />
      </ListItemIcon>
      <ListItemText primary="Combat" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <GradeIcon />
      </ListItemIcon>
      <ListItemText primary="Secondaries" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <GroupWorkIcon />
      </ListItemIcon>
      <ListItemText primary="Magic" />
    </ListItem>
  </List>
);

MainList.propTypes = {
  match: PropTypes.object.isRequired
};

export default MainList;
