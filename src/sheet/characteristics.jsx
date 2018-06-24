import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const Characteristics = ({ classes, character }) => (
  <Table>
    <TableHead>
      <TableRow>
        <CustomTableCell />
        <CustomTableCell>BASE</CustomTableCell>
        <CustomTableCell>ACTUAL</CustomTableCell>
        <CustomTableCell>BONO</CustomTableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {Object.keys(character.characteristics).map(key => (
        <TableRow key={key}>
          <CustomTableCell>{key.toLocaleUpperCase()}</CustomTableCell>
          <TableCell>{character.characteristics[key].base}</TableCell>
          <TableCell>{character.characteristics[key].actual}</TableCell>
          <TableCell>{character.characteristics[key].bonus}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

Characteristics.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string
  })
};

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 14
  }
}))(TableCell);

export default withStyles({})(Characteristics);
