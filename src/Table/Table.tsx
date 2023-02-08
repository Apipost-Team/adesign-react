import React, { useRef, useEffect, useState, useMemo } from 'react';
import './style/index.less';
import cn from 'classnames';
import cloneDeep from 'lodash/cloneDeep';
import TableRow from './TableRow';
import { TableContext, ColumnContext } from './Context';
import Header from './Header';
import { TableProps } from './interface';

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
    onFiledChange,
    onDeleteRow,
  } = props;

  const refTable = useRef<any>(null);

  const handleLayoutChange = (_ayout: any, index: number) => {
    const newLayout: any = layouts !== undefined ? cloneDeep(layouts) : {};
    newLayout[index] = _ayout;
    onLayoutsChange(newLayout);
  };

  if (data === undefined) {
    return null;
  }

  const renderRowItem = (rowData: any, index: number) => {
    return (
      <TableRow
        key={`${index}`}
        rowKey={rowKey === undefined ? rowKey : rowData?.[rowKey]}
        rowIndex={index}
        rowData={rowData}
        columns={columns}
      />
    );
  };

  const columnContext = useMemo(() => {
    return {
      onFiledChange,
      onDeleteRow,
    };
  }, [onFiledChange,onDeleteRow]);



  return (
    <TableContext.Provider
      value={{
        refTable,
        layouts,
        handleLayoutChange,
      }}
    >
      <ColumnContext.Provider value={columnContext}>
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
            {data.length === 0 ? (
              noDataElement
            ) : 'renderRow' in props && typeof renderRow === 'function' ? (
              <>{renderRow(data, renderRowItem)}</>
            ) : (
              <tbody>
                {data.map((rowData, index) =>
                  React.cloneElement(<>{renderRowItem(rowData, index)}</>, { key: index })
                )}
              </tbody>
            )}
          </table>
        </div>
      </ColumnContext.Provider>
    </TableContext.Provider>
  );
};

export default Table;
