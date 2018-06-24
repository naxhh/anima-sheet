import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';

const styles = {
  flex: {
    display: 'flex'
  },
  lifeTable: {
    width: '50%'
  },
  historyTable: {
    width: '50%'
  },
  bold: {
    fontWeight: 500
  },
  positive: {
    color: green[500],
    fontWeight: 'bold'
  },
  negative: {
    color: red[500],
    fontWeight: 'bold'
  }
};

const Life = ({ character: { life }, classes }) => (
  <div className={classes.flex}>
    <Table className={classes.lifeTable}>
      <TableHead>
        <TableRow>
          <TableCell>Estaísticas</TableCell>
          <TableCell />
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Base</TableCell>
          <TableCell>{life.base}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Categoría</TableCell>
          <TableCell>{life.category}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Múltiplos</TableCell>
          <TableCell>{life.multi}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>PV Finales</TableCell>
          <TableCell>{life.final}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className={classes.bold}>Vida Actual</TableCell>
          <TableCell>{life.actual}</TableCell>
        </TableRow>
      </TableBody>
    </Table>

    <Table className={classes.historyTable}>
      <TableHead>
        <TableRow>
          <TableCell>Histórico</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {life.history.map((value, key) => (
          <TableRow key={key}>
            <TableCell
              className={classNames(
                value.indexOf('+') !== -1 && classes.positive,
                value.indexOf('-') !== -1 && classes.negative
              )}
            >
              {value}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

Life.propTypes = {
  classes: PropTypes.object.isRequired,
  character: PropTypes.shape({
    name: PropTypes.string
  })
};

export default withStyles(styles)(Life);
