// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useRef } from 'react';
import './index.less';
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
    onLayoutsChange = () => undefined,
    renderRow = () => undefined,
  } = props;

  const refTable = useRef<HTMLDivElement>();

  const handleLayoutChange = (_ayout: any, index: number) => {
    const newLayout = layouts !== undefined ? cloneDeep(layouts) : {};
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
      }}
    >
      <div style={style} className={cn(className, 'apipost-table-container')}>
        <table
          ref={refTable}
          className={cn({
            'apipost-table': true,
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
              {data.map((rowData, index) => (
                <>{renderRowItem(rowData, index)}</>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </Provider>
  );
};

export default Table;
