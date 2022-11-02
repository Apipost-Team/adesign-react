import React, { useRef, useEffect, useState } from 'react';
import './style/index.less';
import cn from 'classnames';
import cloneDeep from 'lodash/cloneDeep';
import TableRow from './TableRow';
import Context from './Context';
import Header from './Header';
import { TableProps } from './interface';

const { Provider } = Context;

const Table: React.FC<TableProps> = (props) => {
  const {
    data, // 数据源
    style,
    className,
    columns,
    showHeader = true,
    noDataElement,
    layouts,
    showBorder = false,
    rowKey,
    hasPadding = true,
    onLayoutsChange = () => undefined,
    renderRow = () => undefined,
  } = props;

  const refTable = useRef<HTMLDivElement>();
  // 内部数据源state
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    setTableData(data || []);
  }, [data]);
  const handleLayoutChange = (_ayout: any, index: number) => {
    const newLayout = layouts !== undefined ? cloneDeep(layouts) : {};
    newLayout[index] = _ayout;
    onLayoutsChange(newLayout);
  };

  if (tableData === undefined) {
    return null;
  }

  const renderRowItem = (rowData: any, index: number) => {
    return (
      <TableRow
        key={`${index}`}
        rowKey={rowData?.[rowKey]}
        rowIndex={index}
        rowData={rowData}
        columns={columns}
      />
    );
  };

  return (
    <Provider
      value={{
        refTable,
        layouts,
        handleLayoutChange,
        tableData,
        setTableData,
        data,
      }}
    >
      <div style={style} className={cn(className, 'apipost-table-container')}>
        <table
          ref={refTable}
          className={cn({
            'apipost-table': true,
            'apipost-table-haspadding': hasPadding,
            'apipost-table-border': showBorder === true,
          })}
        >
          {showHeader === true && <Header columns={columns} />}
          {tableData.length === 0 ? (
            noDataElement
          ) : 'renderRow' in props && typeof renderRow === 'function' ? (
            <>{renderRow(tableData, renderRowItem)}</>
          ) : (
            <tbody>
              {tableData.map((rowData, index) =>
                React.cloneElement(<>{renderRowItem(rowData, index)}</>, { key: index })
              )}
            </tbody>
          )}
        </table>
      </div>
    </Provider>
  );
};

export default Table;
