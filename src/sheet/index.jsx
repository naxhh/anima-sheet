import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { withCharacter } from '../data';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

// TODO: mobile friendly
const styles = theme => ({
  table: {},
  title: {
    'font-weight': 500
  }
});

const Sheet = ({ classes, character }) => (
  <Table className={classes.table}>
    <TableBody>
      <TableRow>
        <TableCell className={classes.title}>Nombre:</TableCell>
        <TableCell>{character.name}</TableCell>

        <TableCell />
        <TableCell />
        <TableCell />
        <TableCell />
      </TableRow>

      <TableRow>
        <TableCell className={classes.title}>Categoría:</TableCell>
        <TableCell>{character.basic.category}</TableCell>

        <TableCell />
        <TableCell />

        <TableCell className={classes.title}>Pelo,Ojos:</TableCell>
        <TableCell>
          {character.basic.hair} / {character.basic.eyes}
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell className={classes.title}>Nivel:</TableCell>
        <TableCell>{character.basic.level}</TableCell>

        <TableCell className={classes.title}>Edad:</TableCell>
        <TableCell>{character.basic.age}</TableCell>

        <TableCell className={classes.title}>P. Desarrollo:</TableCell>
        <TableCell>{character.basic.development_points}</TableCell>
      </TableRow>

      <TableRow>
        <TableCell className={classes.title}>Sexo:</TableCell>
        <TableCell>{character.basic.sex}</TableCell>

        <TableCell />
        <TableCell />

        <TableCell className={classes.title}>Altura, Peso:</TableCell>
        <TableCell>
          {character.basic.height} / {character.basic.weight}
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell className={classes.title}>Raza:</TableCell>
        <TableCell>{character.basic.race}</TableCell>

        <TableCell className={classes.title}>Apariencia:</TableCell>
        <TableCell>{character.basic.apparence}</TableCell>

        <TableCell className={classes.title}>Tamaño:</TableCell>
        <TableCell>{character.basic.size}</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

Sheet.propTypes = {
  classes: PropTypes.object.isRequired,
  character: PropTypes.shape({
    name: PropTypes.string
  })
};

export default withStyles(styles, { withTheme: true })(withCharacter(Sheet));
