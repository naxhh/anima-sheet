import React from 'react';
import AppBar from './AppBar';

const withAppBar = Component => {
  const WithAppBar = props => (
    <AppBar match={props.match}>
      <Component {...props} />
    </AppBar>
  );

  return WithAppBar;
};

export default withAppBar;
