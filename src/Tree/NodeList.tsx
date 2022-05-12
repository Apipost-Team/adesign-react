import React, { useState, useContext, useImperativeHandle, useEffect } from 'react';
import { List as VirtualList, AutoSizer } from 'react-virtualized';
import TreeNode from './TreeNode';
import TreeContext from './TreeContext';

type ScrollSize = {
  width: number;
  height: number;
};

const NodeList = (props, ref) => {
  const { perfixCls, data, dataList } = props;
  const {
    handleExpandItem,
    handleCheckAll,
    checkStatus,
    fieldNames,
    expandedKeys,
    enableVirtualList,
    scrollToIndex,
    setScrollToIndex,
  } = useContext(TreeContext);

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

  const renderNodeItem = (item, nodeIndex, params) => {
    return (
      item.show.every((visible: boolean) => visible === true) && (
        <TreeNode
          {...params}
          perfixCls={perfixCls}
          {...item}
          nodeKey={item.key}
          nodeIndex={nodeIndex}
        />
      )
    );
  };

  const virtualRender = ({ key, index, style }) =>
    renderNodeItem(data[index], index, { key, style });

  return (
    <>
      {enableVirtualList ? (
        <AutoSizer>
          {({ width, height }: ScrollSize) => (
            <VirtualList
              width={width}
              height={height}
              rowCount={data.length}
              rowHeight={30}
              rowRenderer={virtualRender}
              overscanRowCount={10}
              scrollToIndex={scrollToIndex}
            />
          )}
        </AutoSizer>
      ) : (
        <div>{data.map(renderNodeItem)}</div>
      )}
    </>
  );
};

export default React.forwardRef(NodeList);
