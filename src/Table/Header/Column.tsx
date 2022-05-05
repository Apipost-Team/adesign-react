import React, { useEffect, useState, useContext } from 'react';
import SplitBar from '../SplitBar';
import Context from '../Context';

const Column = (props) => {
  const { colItem, colIndex } = props;
  const { refTable, layouts, handleLayoutChange = () => undefined } = useContext(Context);

  const tableHeight = refTable?.current?.offsetHeight || 0;
  const defaultLayout = layouts?.[colIndex];

  const [layout, setLayout] = useState({
    width: colItem.width !== undefined ? colItem.width : 0,
  }); // 组件布局

  useEffect(() => {
    if (defaultLayout !== undefined) {
      setLayout(defaultLayout);
    }
  }, [defaultLayout]);

  const onLayoutChange = (newLayout) => {
    if (newLayout.width < 30) {
      newLayout.width = 30;
    }
    setLayout(newLayout);
    handleLayoutChange(newLayout, colIndex);
  };

  return (
    <td
      className="apipost-table-td"
      style={{
        width: layout?.width > 0 ? `${layout?.width}px` : 'auto',
      }}
    >
      <span className="apipost-table-cell">{colItem.title || ''}</span>
      {colItem.enableResize && (
        <SplitBar layout={layout} tableHeight={tableHeight} onLayoutChange={onLayoutChange} />
      )}
    </td>
  );
};

export default Column;
