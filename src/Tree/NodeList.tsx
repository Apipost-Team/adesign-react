import React, { useContext, useImperativeHandle } from 'react';
import { List as VirtualList, AutoSizer } from 'react-virtualized';
import { isObject, isString, isUndefined } from 'lodash';
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
    enableVirtualList,
    scrollToIndex,
    setScrollToIndex,
  } = useContext(TreeContext);

  const handleScrollTo = (key: string, checkedKey = true) => {
    if (dataList.length === 0) {
      return;
    }
    if (!isString(fieldNames?.parent) || !isString(fieldNames.key)) {
      return;
    }
    const nodeKey: string = fieldNames.key;
    const parentKey: string = fieldNames?.parent;

    const treeDatas: { [id: string]: any } = {};
    dataList.forEach((item: any) => {
      treeDatas[item[fieldNames.key]] = item;
    });

    const ckdList = [key];
    const targetItem = treeDatas[key];
    const findParentNodes = (parentNode: any) => {
      if (isUndefined(parentNode)) {
        return;
      }
      if (ckdList.indexOf(parentNode?.[nodeKey]) !== -1) {
        return;
      }
      ckdList.push(parentNode[nodeKey]);
      const newParent = treeDatas[parentNode[parentKey]];
      findParentNodes(newParent);
    };
    findParentNodes(treeDatas[targetItem[parentKey]]);
    if (checkedKey === true) {
      handleExpandItem(ckdList, key);
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
              onScroll={setScrollToIndex.bind(null, undefined)}
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
