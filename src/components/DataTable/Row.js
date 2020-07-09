import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import cx from 'classnames';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import DragHandleIcon from '@material-ui/icons/DragHandle';

const DragHandle = SortableHandle(() => (
  <IconButton style={{ cursor: 'move' }}>
    <DragHandleIcon />
  </IconButton>
));

export default SortableElement(({
  row,
  rowIndex: i,
  selectable,
  classes,
  selected,
  setSelected,
  displayFields,
  action,
}) => {
  return (
    <TableRow
      className={cx(classes.dataItemRow, {
        selected: selected.map(({ rowIndex }) => rowIndex).includes(i),
      })}
    >
      {selectable && (
        <TableCell padding="none">
          <Checkbox
            checked={selected.map(({ rowIndex }) => rowIndex).includes(i)}
            onChange={() => setSelected(selected => selected.map(({ rowIndex }) => rowIndex).includes(i) ?
              selected.filter(({ rowIndex }) => rowIndex !== i)
              :
              [...selected, { row, rowIndex: i }])}
          />
        </TableCell>
      )}
      <TableCell padding="none">
        <DragHandle />
      </TableCell>
      {displayFields.map((f, j) => {
        const children = f.render ?
          f.render({ row, rowIndex: i, column: f.key, columnIndex: j, })
          :
          (row.data || row)[f.key];
        return (
          <TableCell {...f.cellProps} key={`${i}${f.key}${j}`}>
            {children}
          </TableCell>
        );
      })}
      {!action ? null : (
        <TableCell align="right" padding="none">
          {action}
        </TableCell>
      )}
    </TableRow>
  );
});
