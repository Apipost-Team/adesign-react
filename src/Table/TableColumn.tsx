import React from 'react';
import cn from 'classnames';
import { ColumnProps } from './interface';

const TableColumn: React.FC<ColumnProps> = (props) => {
  const { bodyCellStyle, className, align, render, rowData, dataIndex, rowIndex } = props;
  const content = rowData[dataIndex];

  return (
    <td
      style={{ ...bodyCellStyle, textAlign: align }}
      className={cn(className, 'apipost-table-td')}
    >
      <div className="apipost-table-cell">
        {typeof render === 'function'
          ? render(content, rowData, rowIndex)
          : content}
      </div>
    </td>
  );
};

export default TableColumn;
