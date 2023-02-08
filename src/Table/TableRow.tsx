import React from 'react';
import TableColumn from './TableColumn';
import { RowProps } from './interface';
import CheckBox from '../CheckBox';
import { CheckStatus } from '../CheckBox/interface';

const TableRow: React.FC<RowProps> = (props) => {
  const {
    onSelectChange,
    rowSelection,
    rowData,
    columns,
    rowKey,
    rowIndex,
    ...restProps
  } = props;

  //console.log(rowData,'----rowdata----');

  const handleSelectRows = (status: CheckStatus) => {
    if (typeof onSelectChange === 'function') {
      onSelectChange(status, rowKey);
    }
  };

  const renderSelection = (selection: typeof rowSelection, rowKey: string) => {
    const checkStatus = selection?.selectedRowKeys?.includes(rowKey)
      ? CheckStatus.CHECKED
      : CheckStatus.UNCHECK;
    if (selection?.type === 'checkbox') {
      return (
        <td className="td-selection">
          <CheckBox checked={checkStatus} onChange={handleSelectRows} />
        </td>
      );
    }
    return null;
  };

  return (
    <>
      <tr className="apipost-table-tr" {...restProps}>
        {rowSelection !== undefined && renderSelection(rowSelection, rowKey)}
        {columns?.map((colItem, colIndex) => (
          <TableColumn
            key={colIndex}
            {...colItem}
            rowIndex={rowIndex}
            rowData={rowData}
          />
        ))}
      </tr>
    </>
  );
};

export default React.memo(TableRow);
