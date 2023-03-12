import React, { useContext } from 'react';
import cn from 'classnames';
import { ColumnProps } from './interface';
import { isFunction, isObject } from 'lodash';
import { ColumnContext } from './Context';

const TableColumn: React.FC<ColumnProps> = (props) => {
  const { bodyCellStyle, className, align, render, element, rowData, dataIndex, rowIndex } = props;

  const { onFiledChange, onDeleteRow } = useContext(ColumnContext);

  const content = rowData[dataIndex];

  /*
    @params newVal 修改后的单元格数据
    @params coverRowData 是否覆盖当前行数据
  */
  const handleItemChange = (newVal: any, coverRowData = false) => {
    const newData = {
      ...rowData,
      [dataIndex]: newVal,
    };
    if (!isFunction(onFiledChange)) {
      return;
    }
    if (coverRowData === true) {
      onFiledChange(newVal, rowIndex);
      return;
    }
    onFiledChange(newData, rowIndex);
  };

  const handleDeleteRow = () => {
    if (!isFunction(onDeleteRow)) {
      debugger
      return;
    }
    onDeleteRow(rowIndex);
  };

  const renderContent = (render: any, element: React.ReactNode, content: any) => {
    if (isFunction(render)) {
      return render(content, rowData, rowIndex, dataIndex);
    } else if (isObject(element)) {
      const TableItem: any = element;
      return (
        <TableItem
          value={content}
          rowData={rowData}
          onDeleteRow={handleDeleteRow}
          onChange={handleItemChange}
        />
      );
    }
    return content;
  };

  return (
    <td
      style={{ ...bodyCellStyle, textAlign: align }}
      className={cn(className, 'apipost-table-td')}
    >
      <div className="apipost-table-cell">{renderContent(render, element, content)}</div>
    </td>
  );
};

export default React.memo(TableColumn);
