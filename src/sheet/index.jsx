import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { withCharacter } from '../data';
import Character from './character';

import Typography from '@material-ui/core/Typography';

import Tabs from './tabs';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import WhatshotIcon from '@material-ui/icons/Whatshot';

const CHARACTER_LABEL = 'Personaje';
const LIFE_LABEL = 'Vida';
const CARACTERISTICS_LABEL = 'Características';

const styles = theme => ({});

class Sheet extends Component {
  state = {
    tab: CHARACTER_LABEL
  };

  handleChange = (event, tab) => {
    this.setState({ tab });
  };

  render() {
    const { character } = this.props;

    return (
      <Fragment>
        <Typography variant="title" id="tableTitle">
          {this.state.tab}
        </Typography>

        {this.state.tab === CHARACTER_LABEL && (
          <Fragment>
            <Character character={character} />
          </Fragment>
        )}

        <Tabs
          onChange={this.handleChange}
          selected={this.state.tab}
          tabs={[
            { label: CHARACTER_LABEL, icon: AccountBoxIcon },
            { label: LIFE_LABEL, icon: LocalPharmacyIcon },
            { label: CARACTERISTICS_LABEL, icon: WhatshotIcon }
          ]}
        />
      </Fragment>
    );
  }
}

Sheet.propTypes = {
  classes: PropTypes.object.isRequired,
  character: PropTypes.shape({
    name: PropTypes.string
  })
};

export default withStyles(styles, { withTheme: true })(withCharacter(Sheet));
