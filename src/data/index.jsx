import React, { Component } from 'react';

import data from './characters.jsx';

const withCharacter = WrappedComponent => {
  return class withCharacter extends Component {
    constructor(props) {
      super(props);

      this.state = {
        character: data.find(
          character => character.name === props.match.params.name
        )
      };
    }

    render() {
      return (
        <WrappedComponent {...this.props} character={this.state.character} />
      );
    }
  };
};

const withCharacters = WrappedComponent => {
  return class withCharacters extends Component {
    render() {
      return <WrappedComponent {...this.props} characters={data} />;
    }
  };
};

export {
  // Full list of characters
  withCharacters,
  // A specific character that will come from match.params.name
  withCharacter
};
