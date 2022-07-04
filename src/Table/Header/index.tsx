import React from 'react';
import { RowProps } from '../interface';
import CheckBox from '../../CheckBox';
import TableColumn from './Column';

const TableRow: React.FC<RowProps> = (props) => {
  const { rowSelection, columns } = props;

  const renderSelection = (selection: typeof rowSelection) => {
    if (selection === undefined) {
      return null;
    }
    const { columnTitle, columnWidth = 40 } = selection;

    const colstyle = { width: `${columnWidth}px` };
    if (selection.columnTitle !== undefined) {
      return (
        <td style={colstyle} className="td-selection">
          {selection.columnTitle}
        </td>
      );
    }
    if (selection?.type === 'checkbox') {
      return (
        <td style={colstyle} className="td-selection">
          <CheckBox />
        </td>
      );
    }
    return null;
  };

  return (
    <thead>
      <tr className="apipost-table-th">
        {renderSelection(rowSelection)}
        {columns?.map((colItem, colIndex) => (
          <TableColumn
            className="api-post-table-td-border"
            key={colIndex}
            colItem={colItem}
            colIndex={colIndex}
          />
        ))}
      </tr>
    </thead>
  );
};

export default TableRow;
