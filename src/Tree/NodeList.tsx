import React, { useState, useContext, useImperativeHandle, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { List as VirtualList, AutoSizer } from 'react-virtualized';

import _ from 'lodash';
import TreeNode from './TreeNode';
import Card from './NodeCard';
import TreeContext from './TreeContext';

let preNodeExpandStatus = false;

const NodeList = (props, ref) => {
  const { perfixCls, data, dataList } = props;
  const {
    handleExpandItem,
    handleNodeDragEnd,
    draggable,
    handleCheckAll,
    checkStatus,
    fieldNames,
    expandedKeys,
    enableVirtualList,
    scrollToIndex,
    setScrollToIndex,
  } = useContext(TreeContext);

  const [listRef, setListRef] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(-1);

  const handleNodeMoveBegin = (dragIndex) => {
    const dragedItem = data[dragIndex];
    preNodeExpandStatus = dragedItem.isExpand;
    if (dragedItem.isLeaf !== true && preNodeExpandStatus) {
      handleExpandItem(dragedItem);
    }
  };

  const handleNodeMoving = (s, hIndex) => {
    if (hoverIndex !== hIndex) {
      setHoverIndex(hIndex);
    }
  };

  const handleNodeMoveEnd = (sIndex, toIndex, mode) => {
    setHoverIndex(-1);
    handleNodeDragEnd(sIndex, toIndex, mode);
  };

  const renderNodeItem = (item, nodeIndex) => (
    <React.Fragment key={item.key}>
      {draggable ? (
        <Card
          index={nodeIndex}
          key={item.key}
          beginMove={handleNodeMoveBegin}
          moved={handleNodeMoveEnd}
          moving={handleNodeMoving}
        >
          {item.show.reduce((a, b) => a && b, true) && (
            <TreeNode perfixCls={perfixCls} {...item} nodeKey={item.key} nodeIndex={nodeIndex} />
          )}
        </Card>
      ) : (
        item.show.reduce((a, b) => a && b, true) && (
          <TreeNode perfixCls={perfixCls} {...item} nodeKey={item.key} nodeIndex={nodeIndex} />
        )
      )}
    </React.Fragment>
  );

  const [scrollKey, setScrollKey] = useState(null);

  useEffect(() => {
    if (scrollKey !== null) {
      const nodeIndex = data.findIndex((d) => d.key === scrollKey);
      if (nodeIndex !== -1) {
        setScrollToIndex(nodeIndex);
        // const baseOffsetTop = listRef.offsetTop;
        // const targetOffsetTop = listRef.childNodes[nodeIndex].offsetTop;
        // listRef.parentNode.scroll(0, targetOffsetTop - baseOffsetTop);
      }
      // setScrollKey(null);
    }
  }, [expandedKeys]);

  const handleScrollTo = (key, checkedKey = true) => {
    const treeDatas = {};
    if (dataList.length === 0) {
      return;
    }
    dataList.forEach((item) => {
      treeDatas[item[fieldNames.key]] = item;
    });
    const ckdList = [key];

    let parentNode = treeDatas[treeDatas[key][fieldNames.parent]];
    while (parentNode !== undefined) {
      ckdList.push(parentNode[fieldNames.key]);
      parentNode = treeDatas[parentNode[fieldNames.parent]];
    }
    setScrollKey(key);
    if (checkedKey === true) {
      handleExpandItem(ckdList);
    }
  };

  useImperativeHandle(ref, () => ({
    scrollTo: handleScrollTo,
    handleExpandItem,
    handleCheckAll,
    checkStatus,
  }));

  const virtualRender = ({ key, index, style }) => (
    <div key={key} style={style}>
      {renderNodeItem(data[index], index)}
    </div>
  );

  return (
    <div
      ref={(ref1) => {
        setListRef(ref1);
      }}
    >
      <DndProvider backend={HTML5Backend}>
        {enableVirtualList ? (
          <VirtualList
            width={width}
            height={height}
            rowCount={data.length}
            rowHeight={30}
            rowRenderer={virtualRender}
            overscanRowCount={10}
            scrollToIndex={scrollToIndex}
          />
        ) : (
          <>{data.map(renderNodeItem)}</>
        )}
      </DndProvider>
    </div>
  );
};

export default React.forwardRef(NodeList);
