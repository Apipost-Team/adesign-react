import React, { useEffect, useMemo, useState } from 'react';
import cn from 'classnames';
import _ from 'lodash';
import { arrayToTreeObject, flattenTreeData } from './utils';
import NodeList from './NodeList';
import TreeContext from './TreeContext';
import './index.less';
import useCheck from './hooks/useCheck';
import useDrag from './hooks/useDrag';
import { TreeProps } from './interface';

const { Provider } = TreeContext;
const perfixCls = 'apipost-tree';
const Tree = (props: TreeProps, ref: any) => {
  const {
    dataList, // 数据源 一维数组格式
    showLine = false,
    draggable = false,
    enableCheck = false,
    checkboxReadOnly = false, // 所有的勾选框是否只读
    isExpandAllKeys = true,
    defaultExpandKeys = undefined,
    onExpandKeysChange = () => undefined,
    defaultCheckedKeys,
    checkedKeys,
    fieldNames = {
      key: 'key',
      title: 'title',
      parent: 'parent',
      children: 'children',
    },
    onCheck = () => undefined,
    render,
    renderList,
    showIcon = true,
    onNodeClick = () => undefined,
    onNodeDragEnd = () => undefined,
    onRightClick = () => undefined,
    onMultiSelect = () => undefined,
    onCheckAll = () => undefined,
    onOutSideClick = () => undefined,
    selectedKeys = [], // 默认选中节点
    style,
    className,
    enableVirtualList = false,
    nodeSort = undefined, // 节点排序
  } = props;
  const [expandedKeys, setExpandedKeys] = useState<string[]>([]);
  const [flattenNodes, setFlattenNodes] = useState([]);
  const [cachedTree, setCachedTree] = useState({});
  const [scrollToIndex, setScrollToIndex] = useState(0);
  const { mergeCheckedKeys, halfCheckedKeys, handleCheckNode, handleCheckAll } = useCheck({
    onCheck,
    onCheckAll,
    dataList,
    fieldNames,
    checkboxReadOnly,
    defaultCheckedKeys,
    checkedKeys,
  });

  // const mergeCheckedKeys = defaultCheckedKeys !== undefined ? defaultCheckedKeys : checkedKeys;

  useEffect(() => {
    if (defaultExpandKeys !== undefined && _.isEqual(defaultExpandKeys, expandedKeys) === false) {
      setExpandedKeys(defaultExpandKeys);
    }
  }, [defaultExpandKeys, dataList]);

  const { handleNodeDragEnd } = useDrag({ flattenNodes, fieldNames, onNodeDragEnd, cachedTree });
  // 批量展开/折叠
  const prepareExpandKeys = (expand, datalist) => {
    const expandKeys = {};
    if (expand === true) {
      const rootNode = {};
      datalist.forEach((item) => {
        rootNode[item[fieldNames.key]] = {};
      });
      datalist.forEach((item) => {
        const parent = rootNode[item[fieldNames.parent]];
        if (parent !== undefined) {
          parent.notLeaf = true;
        }
      });
      Object.entries(rootNode).forEach(([key, item]) => {
        if (item.notLeaf === true) {
          expandKeys[key] = true;
        }
      });
    }
    return expandKeys;
  };

  // 默认展开节点//暂时只支持是否全部展示
  useEffect(() => {
    if (expandedKeys !== null || dataList?.length === 0) {
      // 仅第一次生效
      return;
    }
    const keysObj = prepareExpandKeys(isExpandAllKeys, dataList);
    setExpandedKeys(Object.keys(keysObj));
  }, [isExpandAllKeys, dataList]);

  useEffect(() => {
    if (Array.isArray(expandedKeys) === false) {
      return;
    }
    const treeData = arrayToTreeObject(dataList, fieldNames);
    const node = flattenTreeData(treeData, expandedKeys, fieldNames, nodeSort);
    setCachedTree(treeData);
    setFlattenNodes(node);
  }, [dataList]);

  // 默认勾选节点信息
  // useEffect(() => {
  //   if (defaultCheckedKeys.length !== 0) {
  //     setCheckedKeys(defaultCheckedKeys);
  //   }
  // }, [defaultCheckedKeys]);

  /*
     展开或闭合节点
    nodeKeys: sring 节点展开闭合/Array 要展开的节点
    callBack 回调
  */
  const handleExpandItem = (nodeKeys, nodeIndex) => {
    let expandKeyData = {};
    if (typeof nodeKeys === 'boolean') {
      expandKeyData = prepareExpandKeys(nodeKeys, dataList);
    } else {
      expandKeyData = expandedKeys.reduce((a, b) => ({ ...a, [b]: true }), {});
    }
    if (Array.isArray(nodeKeys)) {
      nodeKeys.forEach((nodeKey) => {
        expandKeyData[nodeKey] = true;
      });
    } else if (expandKeyData[nodeKeys] === undefined) {
      expandKeyData[nodeKeys] = true;
    } else {
      expandKeyData = _.omit(expandKeyData, nodeKeys);
    }

    const expandKeyArr = Object.keys(expandKeyData);
    setExpandedKeys(expandKeyArr);
    const nodes = flattenTreeData(cachedTree, expandKeyArr, fieldNames, nodeSort);
    setFlattenNodes(nodes);
    onExpandKeysChange(expandKeyArr);
    setScrollToIndex(nodeIndex);
  };

  const handleRightClick = (e, nodeData) => {
    const data = flattenNodes.filter((node) => selectedKeys.includes(node.key));
    if (data.length > 1) {
      onRightClick(e, data);
    } else {
      onRightClick(e, nodeData);
    }
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  return (
    <div
      style={style}
      className={cn({
        [perfixCls]: true,
        [className]: className !== undefined,
      })}
      onClick={onOutSideClick}
      onContextMenu={handleRightClick}
    >
      <Provider
        value={{
          fieldNames,
          dataList,
          showLine,
          draggable,
          handleCheckNode,
          expandedKeys,
          handleExpandItem,
          handleNodeDragEnd,
          enableCheck,
          checkboxReadOnly,
          checkedKeys: mergeCheckedKeys,
          halfCheckedKeys,
          render,
          showIcon,
          onNodeClick,
          onRightClick: handleRightClick,
          selectedKeys,
          onMultiSelect,
          handleCheckAll,
          enableVirtualList,
          scrollToIndex,
          setScrollToIndex,
        }}
      >
        {/* {dataList.length} */}
        <NodeList dataList={dataList} perfixCls={perfixCls} data={flattenNodes} ref={ref} />
      </Provider>
    </div>
  );
};

export default React.forwardRef<HTMLDivElement, TreeProps>(Tree);
