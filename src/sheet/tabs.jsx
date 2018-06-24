import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class CustomTabs extends React.Component {
  render() {
    return (
      <Paper>
        <Tabs
          value={this.props.selected}
          onChange={this.props.onChange}
          fullWidth
          centered
          indicatorColor="secondary"
          textColor="secondary"
        >
          {this.props.tabs.map((tab, key) => (
            <Tab
              key={key}
              value={tab.label}
              icon={<tab.icon />}
              label={tab.label}
            />
          ))}
        </Tabs>
      </Paper>
    );
  }
}

CustomTabs.propTypes = {
  selected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.func.isRequired
    })
  )
};

CustomTabs.defaultProps = {
  onChange: () => {}
};

export default CustomTabs;
