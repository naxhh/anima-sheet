import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import { withCharacter } from '../data';
import Character from './character';
import Characteristics from './characteristics';
import Life from './life';

import Typography from '@material-ui/core/Typography';

import Tabs from './tabs';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import WhatshotIcon from '@material-ui/icons/Whatshot';

const CHARACTER_LABEL = 'Personaje';
const LIFE_LABEL = 'Vida';
const CHARACTERISTICS_LABEL = 'Características';

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
          <Character character={character} />
        )}
        {this.state.tab === CHARACTERISTICS_LABEL && (
          <Characteristics character={character} />
        )}

        {this.state.tab === LIFE_LABEL && <Life character={character} />}

        <Tabs
          onChange={this.handleChange}
          selected={this.state.tab}
          tabs={[
            { label: CHARACTER_LABEL, icon: AccountBoxIcon },
            { label: LIFE_LABEL, icon: LocalPharmacyIcon },
            { label: CHARACTERISTICS_LABEL, icon: WhatshotIcon }
          ]}
        />
      </Fragment>
    );
  }
}

Sheet.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string
  })
};

export default withCharacter(Sheet);
